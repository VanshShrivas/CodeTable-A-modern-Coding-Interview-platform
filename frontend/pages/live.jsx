"use client";
import React, { useState, useRef, useEffect } from "react";
import { Code, MessageSquare, Pencil } from "lucide-react";

const LiveInterview = () => {
  const [leftWidth, setLeftWidth] = useState(65); // percentage
  const dragging = useRef(false);

  const handleMouseMove = (e) => {
    if (!dragging.current) return;

    const newWidth = (e.clientX / window.innerWidth) * 100;

    // Limit boundaries
    if (newWidth > 20 && newWidth < 80) {
      setLeftWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    dragging.current = false;
    document.body.style.cursor = "default";
    document.body.style.userSelect = "auto";
  };

  const startDrag = () => {
    dragging.current = true;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const [activeTab, setActiveTab] = useState("editor");

  return (
    <div className="bg-black text-white w-full h-screen flex overflow-hidden">

      {/* LEFT SIDE */}
      <div
        className="flex flex-col border-r border-purple-700/50"
        style={{ width: `${leftWidth}%` }}
      >
        {/* VIDEO AREA */}
        <div className="relative h-[55%] bg-zinc-900 p-2">

          {/* Big video */}
          <div className="h-full w-full bg-zinc-800 rounded-xl shadow-lg flex items-center justify-center">
            <p className="text-purple-200 text-xl">Interviewer Video</p>
          </div>

          {/* Small floating video */}
          <div className="absolute bottom-4 right-4 w-48 h-32 bg-zinc-700 rounded-lg shadow-md p-1">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-blue-200 text-sm">Your Camera</p>
            </div>
          </div>
        </div>

        {/* QUESTION AREA */}
        <div className="h-[45%] bg-zinc-950 p-4 overflow-auto">
          <h2 className="text-xl font-semibold text-purple-200 mb-2">
            Live Question
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            // Question will come here...
          </p>
        </div>
      </div>

      {/* DRAG HANDLE */}
      <div
        onMouseDown={startDrag}
        className="
          w-[8px]
          cursor-col-resize
          bg-gradient-to-b from-purple-600 to-blue-500
         
          transition-all
          relative
        "
      >
        {/* gripping dots */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex flex-col gap-1 items-center">
          <span className="w-1 h-1 bg-white/60 rounded-full"></span>
          <span className="w-1 h-1 bg-white/60 rounded-full"></span>
          <span className="w-1 h-1 bg-white/60 rounded-full"></span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col flex-1 border-l border-purple-700/50">

        {/* TABS */}
        <div className="flex bg-zinc-950 border-b border-purple-500">
          <button
            onClick={() => setActiveTab("editor")}
            className={`flex-1 flex flex-col items-center py-2 hover:bg-zinc-800 ${
              activeTab === "editor"
                ? "bg-zinc-800 border-b-2 border-purple-400"
                : ""
            }`}
          >
            <Code className="w-5 h-5" />
            <span className="text-xs">Editor</span>
          </button>

          <button
            onClick={() => setActiveTab("chat")}
            className={`flex-1 flex flex-col items-center py-2 hover:bg-zinc-800 ${
              activeTab === "chat"
                ? "bg-zinc-800 border-b-2 border-purple-400"
                : ""
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs">Chat</span>
          </button>

          <button
            onClick={() => setActiveTab("whiteboard")}
            className={`flex-1 flex flex-col items-center py-2 hover:bg-zinc-800 ${
              activeTab === "whiteboard"
                ? "bg-zinc-800 border-b-2 border-purple-400"
                : ""
            }`}
          >
            <Pencil className="w-5 h-5" />
            <span className="text-xs">Whiteboard</span>
          </button>
        </div>

        {/* TAB CONTENT */}
        <div className="flex-1 bg-zinc-900 p-2 overflow-auto">
          {activeTab === "editor" && (
            <div className="h-full bg-zinc-800 rounded-lg p-3">
              <p className="text-purple-200">Editor area placeholder...</p>
            </div>
          )}
          {activeTab === "chat" && (
            <div className="h-full bg-zinc-800 rounded-lg p-3">
              <p className="text-purple-200">Chat area placeholder...</p>
            </div>
          )}
          {activeTab === "whiteboard" && (
            <div className="h-full bg-zinc-800 rounded-lg p-3">
              <p className="text-purple-200">Whiteboard placeholder...</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default LiveInterview;
