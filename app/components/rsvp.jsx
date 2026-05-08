'use client'

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";

export default function RSVP({ translation, language }) {
    const [attendance, setAttendance] = useState("");
    const [name, setName] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!attendance || !name) return;

        const { error } = await supabase
            .from("wedding_rsvp")
            .insert([
                {
                    name,
                    attendance,
                },
            ]);

        if (error) {
            console.error("Supabase error:", error.message);
            return;
        }

        setAttendance("");
        setName("");
        setSubmitted(true);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 z-20">
            <div className="flex flex-col items-center gap-4 w-full max-w-md">

                <label className={`${language === 'ru' ? 'russianFont' : 'artiFont'} text-2xl`}>
                    {translation.attendance}
                </label>

                <div className="flex flex-col items-start gap-2">
                    <label className={`${language === 'ru' ? 'russianFont' : 'artiFont'} flex items-center gap-2 cursor-pointer text-2xl`}>
                        <input
                            type="radio"
                            name="attendance"
                            value="yes"
                            checked={attendance === "yes"}
                            onChange={(e) => setAttendance(e.target.value)}
                            className="accent-[#563a3a]"
                            required
                        />
                        {translation.yes}
                    </label>

                    <label className={`${language === 'ru' ? 'russianFont' : 'artiFont'} flex items-center gap-2 cursor-pointer text-2xl`}>
                        <input
                            type="radio"
                            name="attendance"
                            value="no"
                            checked={attendance === "no"}
                            onChange={(e) => setAttendance(e.target.value)}
                            className="accent-[#563a3a]"
                            required
                        />
                        {translation.no}
                    </label>
                </div>

                <input
                    placeholder={translation.nameSurname}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border-b-2 border-[#563a3aa1] bg-[#ffffff8f] h-12 placeholder-[#563a3a] p-2 px-4 shadow-2xl outline-none rounded-full"
                />

                <button
                    type="submit"
                    className={`${language === 'ru' ? 'russianFont' : ''} px-6 py-3 rounded-full bg-[#ecececa6] shadow-2xl w-fit cursor-pointer`}
                >
                    {translation.send}
                </button>

                {submitted && (
                    <p className={`${language === 'ru' ? 'russianFont' : 'artiFont'} text-center text-[#563a3a]`}>
                        {translation.thanks} 🩶 {translation.respondSent}
                    </p>
                )}
            </div>
        </form>
    );
}