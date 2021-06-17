import { Col, Row, Typography } from "antd";
import React, { FC, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { BibleApi, scriptumDeusApi } from "../../api";
import { DayResponse } from "../../types";
import { BiblePassage } from "../BiblePassage";

const { Title } = Typography;

export const ForToday: FC = () => {
  const api = scriptumDeusApi.create(BibleApi);
  const [dayText, setDayText] = useState<DayResponse>();

  const loadData = async () => {
    const { data: result } = await api!.getDaily();

    return result;
  };

  const { isLoading, error, data } = useQuery("repoData", loadData);

  const b64DecodeUnicode = (str: string) => {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(
      atob(str)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  };

  useEffect(() => {
    const rawText = data?.text!;
    if (rawText) {
      const decodedText = b64DecodeUnicode(rawText);
      setDayText(JSON.parse(decodedText));
    }
  }, [data]);

  if (isLoading)
    return (
      <Row>
        <Col span={24}>Content is loading</Col>
      </Row>
    );

  if (error) {
    return (
      <Row>
        <Col span={24}>{(error as Error).message}</Col>
      </Row>
    );
  }

  return (
    <div style={{ textAlign: "center", margin: "0 auto" }}>
      <Row>
        <Col span={24}>
          <Title level={5}>
            {data?.display?._static} {data?.display?.date} {data?.forToday}
          </Title>
        </Col>
      </Row>
      {dayText?.oldT ? (
        <>
          <Row>
            <Col span={24}>
              <Title level={5}>Vechiul Testament</Title>
            </Col>
          </Row>
          <BiblePassage payload={dayText.oldT}></BiblePassage>
        </>
      ) : (
        <></>
      )}
      {dayText?.newT ? (
        <>
          <Row>
            <Col span={24}>
              <Title level={5}>Noul Testament</Title>
            </Col>
          </Row>
          <BiblePassage payload={dayText.newT}></BiblePassage>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ForToday;
