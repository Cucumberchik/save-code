"use client";
import Typography from "@/typography/typogrpahy";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import { ReactNode } from "react";

const Div = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 10px;
  border: 1px solid var(--gray-alpha-500);

  display: flex;
  flex-direction: column;
  align-items: center;

  .build_info {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    background: var(--gray-alpha-100);
    border-bottom: 1px solid var(--gray-alpha-300);
  }

  img {
    width: 80%;
    height: 85%;
  }
`;

const Building: NextPage = (): ReactNode => {
  return (
    <Div>
      <div className="build_info">
        <Typography variant="h3">Страница в разработке</Typography>
      </div>
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/building-website-6431987-5305738.png?f=webp"
        alt="building"
      />
    </Div>
  );
};

export default Building;
