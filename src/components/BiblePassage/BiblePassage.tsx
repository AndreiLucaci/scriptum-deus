import { Col, Row, Table, Typography } from "antd";
import React, { FC } from "react";
import { BibleResponse, Chapter, Verse } from "../../types";

const { Title } = Typography;

type Key = { key: string };
type DataSourceVerse = Verse & Key;
type Props<T> = {
  payload: T;
};

export const BiblePassage: FC<Props<BibleResponse>> = (props) => {
  const outputChapter = (chapter: Chapter) => {
    const getVerseDS = (): DataSourceVerse[] => {
      return chapter.verses.map((x) => {
        const verseDS: DataSourceVerse = {
          ...x,
          key: `${chapter.number}-${x.number}`,
        };
        return verseDS;
      });
    };

    const columns = [
      {
        title: "Nr",
        dataIndex: "number",
        key: "number",
      },
      {
        title: "Verset",
        dataIndex: "verse",
        key: "verse",
      },
    ];

    return (
      <>
        <Row>
          <Col span={24}>
            <Title level={5}>Capitolul {chapter.number}</Title>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table
              dataSource={getVerseDS()}
              columns={columns}
              pagination={false}
            ></Table>
          </Col>
        </Row>
      </>
    );
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Title level={5}> {props.payload.book} </Title>
        </Col>
      </Row>
      {props.payload.chapters ? (
        props.payload.chapters.map((x) => outputChapter(x))
      ) : (
        <></>
      )}
    </>
  );
};
