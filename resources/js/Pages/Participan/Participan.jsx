import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router } from "@inertiajs/react";
import { useState } from "react";

export default function Participan({ auth }) {
    const data = usePage().props;
    return (
        <AuthenticatedLayout user={auth.user} header={<h2>participan</h2>}>
            <Head title="Participan" />
            <h1>ini halaman participan</h1>
            <table>
                <thead>
                    <th>Seleksi</th>
                    <th>nama</th>
                    <th>status</th>
                    <th>link_WA</th>
                    <th>score</th>
                    <th>nama univ</th>
                </thead>
                <tbody>
                    {data.participan.map((participan) => {
                        return (
                            <tr key={participan.id}>
                                <td>{participan.selection_id}</td>
                                <td>{participan.name}</td>
                                <td>{participan.status}</td>
                                <td>{participan.link_whatsapp}</td>
                                <td>{participan.score}</td>
                                <td>{participan.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </AuthenticatedLayout>
    );
}
