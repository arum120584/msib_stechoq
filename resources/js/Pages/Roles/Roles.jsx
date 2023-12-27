import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router } from "@inertiajs/react";
import { useState } from "react";
// untuk memunculkan data model itu lewat view
export default function Roles({ auth }) {
    //usepage mendapatkan data dari jobscontroler
    const data = usePage().props;
    return (
        <AuthenticatedLayout user={auth.user} header={<h2>role</h2>}>
            <Head title="Role" />
            <h1>ini halaman role</h1>
            <table>
                <thead>
                    <th> nama role</th>
                    <th>level</th>
                </thead>
                <tbody>
                    {/* map(ngelupping 'memunculkan data ) */}
                    {/* Kenapa data.job? karena  */}
                    {data.role.map((roles) => {
                        return (
                            <tr key={roles.id}>
                                <td>{roles.role_name}</td>
                                <td>{roles.level}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </AuthenticatedLayout>
    );
}
