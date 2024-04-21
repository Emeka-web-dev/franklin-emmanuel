"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

type Props = {
  isPageOutOfRange: boolean;
  page: number;
  pageNumbers: number[];
  totalPages: number;
  prevPage: number;
  nextPage: number;
};
export const PostPagination = ({
  isPageOutOfRange,
  page,
  pageNumbers,
  totalPages,
  prevPage,
  nextPage,
}: Props) => {
  if (isPageOutOfRange) {
    return <div>No More pages</div>;
  }
  if (totalPages === 1) return;
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${prevPage}`}
            className={cn(page === 1 && "pointer-events-none opacity-60")}
          />
        </PaginationItem>
        {pageNumbers.map((pageNumber, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href={`?page=${pageNumber}`}
              isActive={page === pageNumber}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        <PaginationItem>
          <PaginationNext
            href={`?page=${nextPage}`}
            className={cn(
              page === totalPages && "pointer-events-none opacity-60"
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
