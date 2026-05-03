"use client";
import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
export default function TestPage() {
  const query = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const data = await fetch("http://localhost:3000/student.json");
      return data.json();
    },
  });
  const [data, setData] = React.useState<any>(null);
  const [active, setActive] = React.useState("all");

  console.log(data
  )
  React.useEffect(() => {
    if (query.data) {
      setData(query.data.students);
    }
  }, [query.data]);

  if (query.isLoading) {
    return <p>Loading...</p>;
  }
    if (query.isError) {
    return <p>Error: {query.error instanceof Error ? query.error.message : "Unknown error"}</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Test Page</h1>

      <div className="flex gap-2 items-center">
        <Button
          variant={active == "all" ? "default" : "secondary"}
          onClick={() => {
            setActive("all");
            setData(query.data.students);
          }}
          className="rounded"
        >
          All
        </Button>
        <Button
          variant={active == "female" ? "default" : "secondary"}
           className="rounded"
          onClick={() => {
            setActive("female");
            setData(
              query.data.students.filter(
                (student: any) => student.gender === "Female",
              ),
            );
          }}
        >
          Female
        </Button>
        <Button variant={active == "male" ? "default" : "secondary"} className="rounded" onClick={() => {
          setActive("male");
          setData(
            query.data.students.filter(
              (student: any) => student.gender === "Male",
            ),
          );
        }}>
          Male
        </Button>
        <Button variant="outline">Electronics</Button>
      </div>
      {data && data.length > 0 ? (
        <ul className="mt-4">
          {data.map((student: any) => (
            <li key={student.id} className="border p-2 rounded mb-2">
              <p>Name: {student.name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
}
