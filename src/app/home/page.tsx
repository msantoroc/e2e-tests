"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const BASE_URL = "https://demo0525754.mockable.io/";

export interface Users {
  id: number;
  name: string;
  age: number;
}

export default function Home() {
  const [users, setUsers] = useState<Users[]>([]);

  const getLiversList = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users`);
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLiversList();
  }, []);

  return (
    <section className="min-h-screen p-4">
      <header className="flex w-full py-4 justify-between">
        <p>Casa Santoro/Souza</p>
        <Link href="/about">Sobre</Link>
      </header>
      <div className="mt-6">
        <h1 className="text-lg font-semibold mb-4">Lista de moradores</h1>
        <div id="users-list" className="bg-black md:bg-transparent">
          {users.map((user) => (
            <div id={String(user.id)} key={user.id} className="mb-4">
              <p>{user.name}</p>
              <p className="text-xs">{user.age} ano(s)</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
