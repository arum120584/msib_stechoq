import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router } from "@inertiajs/react";
import { useState } from "react";
// untuk memunculkan data model itu lewat view
export default function Jobs({ auth }) {
    //usepage mendapatkan data dari jobscontroler
    const data = usePage().props;

    const getJob = (id) => {
        router.visit(`/job/detail/${id}`, {
            method: "get",
        });
    };
    return (
        <AuthenticatedLayout user={auth.user} header={<h2>pekerjaan</h2>}>
            <Head title="Pekerjaan" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg h-fit">
                        <div className="p-6 w-full">
                            <div className="flex flex-row justify-end mb-5">
                                <button className="bg-blue-900 px-4 py-1 rounded-lg">
                                    <p className="text-white text-sm">
                                        Tambah Baru
                                    </p>
                                </button>
                            </div>

                            <table className="w-full">
                                <thead className="bg-gray-100 text-left">
                                    <tr>
                                        <th className="py-3 px-4 w-4 text-sm">
                                            No
                                        </th>
                                        <th className="py-3 px-4 text-sm">
                                            Nama Pekerjaan{" "}
                                        </th>
                                        <th className="py-3 px-4 text-sm">
                                            Tipe
                                        </th>
                                        <th className="py-3 px-4 text-sm">
                                            Divisi
                                        </th>

                                        <th className="py-3 px-4 text-sm">
                                            Status
                                        </th>
                                        <th className="py-3 px-4 text-sm">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* map(ngelupping 'memunculkan data ) */}
                                    {/* Kenapa data.job? karena  */}
                                    {data.ini.map((job, index) => {
                                        return (
                                            <tr key={job.id}>
                                                <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                    {index + 1}
                                                </td>
                                                <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                    {job.job_name}
                                                </td>
                                                <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                    {job.type}
                                                </td>
                                                <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                    {job.division}
                                                </td>
                                                <td className="py-3 px-4 border-b-2 border-gray-50 text-sm">
                                                    {job.status}
                                                </td>
                                                <td className="py-3 px-4 border-b-2 border-gray-50">
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() =>
                                                                getJob(job.id)
                                                            }
                                                            className="bg-sky-400 px-4 py-1 rounded-lg"
                                                        >
                                                            <p className="text-white text-sm">
                                                                Lihat
                                                            </p>
                                                        </button>
                                                        <button className="bg-amber-400 px-4 py-1 rounded-lg">
                                                            <p className="text-white text-sm">
                                                                Edit
                                                            </p>
                                                        </button>
                                                        <button className="bg-rose-500 px-4 py-1 rounded-lg">
                                                            <p className="text-white text-sm">
                                                                Hapus
                                                            </p>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
