import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import PrefListArea from "../PrefListArea";
import { UseQueryResult } from "@tanstack/react-query";

describe("都道府県データの取得関連", () => {
  test("403エラー時に「都道府県データの取得に失敗しました(403)」が表示されるか", () => {
    const mockQueryResult: UseQueryResult<any, Error> = {
      data: {
        description: "",
        message: "Forbidden.",
        statusCode: "403",
      },
      dataUpdatedAt: 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: null,
      fetchStatus: "idle",
      isError: false,
      isFetched: true,
      isFetchedAfterMount: true,
      isFetching: false,
      isInitialLoading: false,
      isLoading: false,
      isLoadingError: false,
      isPaused: false,
      isPending: false,
      isPlaceholderData: false,
      isRefetchError: false,
      isRefetching: false,
      isStale: false,
      isSuccess: true,
      refetch: vi.fn(),
      status: "success",
    };
    render(
      <PrefListArea
        prefData={mockQueryResult}
        manageAllCheckBoxReset={vi.fn()}
        isAllReset={false}
      />,
    );
    expect(
      screen.getByText("都道府県データの取得に失敗しました(403)"),
    ).toBeTruthy();
  });
  test("404エラー時に「都道府県データの取得に失敗しました(404)」が表示されるか", () => {
    const mockQueryResult: UseQueryResult<any, Error> = {
      data: {
        description: "The requested URL /404 was not found on this server.",
        message: "404. That's an error.",
        statusCode: "404",
      },
      dataUpdatedAt: 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: null,
      fetchStatus: "idle",
      isError: false,
      isFetched: true,
      isFetchedAfterMount: true,
      isFetching: false,
      isInitialLoading: false,
      isLoading: false,
      isLoadingError: false,
      isPaused: false,
      isPending: false,
      isPlaceholderData: false,
      isRefetchError: false,
      isRefetching: false,
      isStale: false,
      isSuccess: true,
      refetch: vi.fn(),
      status: "success",
    };
    render(
      <PrefListArea
        prefData={mockQueryResult}
        manageAllCheckBoxReset={vi.fn()}
        isAllReset={false}
      />,
    );
    expect(
      screen.getByText("都道府県データの取得に失敗しました(404)"),
    ).toBeTruthy();
  });
});
