import React from "react";
import { columns, Teachers } from "./_components/table/columns";
import { DataTable } from "./_components/table/data-table";

async function getData(): Promise<Teachers[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      name: "John Doe",
      email: "johndoe@gmail.com",
      category: "web dev",
      status: "active",
      students: 25,
      courses: 3,
    },
    {
      id: "2",
      name: "Rohan Smith",
      email: "rohansmith@gmail.com",
      category: "app dev",
      status: "inactive",
      students: 18,
      courses: 2,
    },
    {
      id: "3",
      name: "Aisha Khan",
      email: "aishakhan@gmail.com",
      category: "data science",
      status: "active",
      students: 32,
      courses: 4,
    },
    {
      id: "4",
      name: "Liam Johnson",
      email: "liamjohnson@gmail.com",
      category: "web dev",
      status: "inactive",
      students: 20,
      courses: 2,
    },
    {
      id: "5",
      name: "Priya Sharma",
      email: "priyasharma@gmail.com",
      category: "ui/ux",
      status: "active",
      students: 27,
      courses: 3,
    },
    {
      id: "6",
      name: "Noah Williams",
      email: "noahwilliams@gmail.com",
      category: "app dev",
      status: "active",
      students: 22,
      courses: 3,
    },
    {
      id: "7",
      name: "Emily Davis",
      email: "emilydavis@gmail.com",
      category: "data science",
      status: "inactive",
      students: 15,
      courses: 1,
    },
    {
      id: "8",
      name: "Arjun Patel",
      email: "arjunpatel@gmail.com",
      category: "web dev",
      status: "active",
      students: 30,
      courses: 4,
    },
    {
      id: "9",
      name: "Sophia Brown",
      email: "sophiabrown@gmail.com",
      category: "ui/ux",
      status: "inactive",
      students: 19,
      courses: 2,
    },
    {
      id: "10",
      name: "Ethan Wilson",
      email: "ethanwilson@gmail.com",
      category: "app dev",
      status: "active",
      students: 24,
      courses: 3,
    },
  ];
}

const ManageTeachers = async () => {
  const data = await getData();
  return (
    <section>
      <h2>All Teachers</h2>
      <div className="mt-2">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
};

export default ManageTeachers;
