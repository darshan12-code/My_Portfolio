import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Youtube from "@tiptap/extension-youtube";
import Placeholder from "@tiptap/extension-placeholder";
import styled from "styled-components";
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough,
  Heading2, Heading3, List, ListOrdered, Quote, Code, Code2,
  Link as LinkIcon, Image as ImageIcon, Youtube as YoutubeIcon,
  AlignLeft, AlignCenter, AlignRight, Minus, Undo, Redo
} from "lucide-react";

const RichEditor = ({ value, onChange, uploadMediaToCloudinary }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      Image.configure({ inline: false, allowBase64: true }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Youtube.configure({ width: "100%", height: 480 }),
      Placeholder.configure({ placeholder: "Start writing..." }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "");
    }
  }, [value]);

  if (!editor) return null;

  const addLink = () => {
    const url = window.prompt("Enter URL:");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const addImage = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      // Upload to Cloudinary via parent handler
      const url = await uploadMediaToCloudinary(file, "image");
      if (url) editor.chain().focus().setImage({ src: url }).run();
    };
    input.click();
  };

  const addYoutube = () => {
    const url = window.prompt("Enter YouTube URL:");
    if (url) editor.commands.setYoutubeVideo({ src: url });
  };

  const tools = [
    { icon: <Undo size={15} />, action: () => editor.chain().focus().undo().run(), title: "Undo" },
    { icon: <Redo size={15} />, action: () => editor.chain().focus().redo().run(), title: "Redo" },
    { separator: true },
    { icon: <Bold size={15} />, action: () => editor.chain().focus().toggleBold().run(), title: "Bold", active: editor.isActive("bold") },
    { icon: <Italic size={15} />, action: () => editor.chain().focus().toggleItalic().run(), title: "Italic", active: editor.isActive("italic") },
    { icon: <UnderlineIcon size={15} />, action: () => editor.chain().focus().toggleUnderline().run(), title: "Underline", active: editor.isActive("underline") },
    { icon: <Strikethrough size={15} />, action: () => editor.chain().focus().toggleStrike().run(), title: "Strike", active: editor.isActive("strike") },
    { separator: true },
    { icon: <Heading2 size={15} />, action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), title: "H2", active: editor.isActive("heading", { level: 2 }) },
    { icon: <Heading3 size={15} />, action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), title: "H3", active: editor.isActive("heading", { level: 3 }) },
    { separator: true },
    { icon: <List size={15} />, action: () => editor.chain().focus().toggleBulletList().run(), title: "Bullet List", active: editor.isActive("bulletList") },
    { icon: <ListOrdered size={15} />, action: () => editor.chain().focus().toggleOrderedList().run(), title: "Ordered List", active: editor.isActive("orderedList") },
    { icon: <Quote size={15} />, action: () => editor.chain().focus().toggleBlockquote().run(), title: "Blockquote", active: editor.isActive("blockquote") },
    { separator: true },
    { icon: <Code size={15} />, action: () => editor.chain().focus().toggleCode().run(), title: "Inline Code", active: editor.isActive("code") },
    { icon: <Code2 size={15} />, action: () => editor.chain().focus().toggleCodeBlock().run(), title: "Code Block", active: editor.isActive("codeBlock") },
    { separator: true },
    { icon: <AlignLeft size={15} />, action: () => editor.chain().focus().setTextAlign("left").run(), title: "Align Left" },
    { icon: <AlignCenter size={15} />, action: () => editor.chain().focus().setTextAlign("center").run(), title: "Align Center" },
    { icon: <AlignRight size={15} />, action: () => editor.chain().focus().setTextAlign("right").run(), title: "Align Right" },
    { separator: true },
    { icon: <LinkIcon size={15} />, action: addLink, title: "Add Link" },
    { icon: <ImageIcon size={15} />, action: addImage, title: "Upload Image" },
    { icon: <YoutubeIcon size={15} />, action: addYoutube, title: "Embed YouTube" },
    { icon: <Minus size={15} />, action: () => editor.chain().focus().setHorizontalRule().run(), title: "Divider" },
  ];

  return (
    <Wrapper>
      <Toolbar>
        {tools.map((tool, i) =>
          tool.separator ? (
            <Sep key={i} />
          ) : (
            <ToolBtn
              key={i}
              type="button"
              title={tool.title}
              $active={tool.active}
              onClick={tool.action}
            >
              {tool.icon}
            </ToolBtn>
          )
        )}
      </Toolbar>
      <EditorArea>
        <EditorContent editor={editor} />
      </EditorArea>
    </Wrapper>
  );
};

export default RichEditor;

/* ---- Styles ---- */

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: 8px;
  overflow: hidden;
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  padding: 8px;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderDefault};
`;

const ToolBtn = styled.button`
  padding: 6px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: ${({ active, theme }) =>
    active ? theme.colors.gradientPinkBlue : "transparent"};
  color: ${({ active, theme }) =>
    active ? "#fff" : theme.colors.textSecondary};

  &:hover {
    background: ${({ theme }) => theme.colors.borderDefault};
  }
`;

const Sep = styled.div`
  width: 1px;
  height: 24px;
  background: ${({ theme }) => theme.colors.borderDefault};
  margin: 4px 4px;
  align-self: center;
`;

const EditorArea = styled.div`
  padding: 16px;
  background: ${({ theme }) => theme.colors.bgPrimary};
  min-height: 300px;

  .ProseMirror {
    outline: none;
    min-height: 280px;
    line-height: 1.7;

    p { margin: 0 0 1rem; }
    h2 { font-size: 1.5rem; margin: 1.5rem 0 0.5rem; }
    h3 { font-size: 1.2rem; margin: 1.2rem 0 0.5rem; }
    ul, ol { padding-left: 1.5rem; margin-bottom: 1rem; }
    blockquote {
      border-left: 3px solid ${({ theme }) => theme.colors.gradientPinkBlue};
      padding-left: 1rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin: 1rem 0;
    }
    code {
      background: #111;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.9em;
    }
    pre {
      background: #111;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
      code { background: none; padding: 0; }
    }
    img {
      max-width: 100%;
      border-radius: 8px;
      margin: 1rem 0;
    }
    iframe {
      width: 100%;
      border-radius: 8px;
      margin: 1rem 0;
    }
    a { color: ${({ theme }) => theme.colors.gradientPinkBlue}; text-decoration: underline; }
    hr { border: none; border-top: 1px solid ${({ theme }) => theme.colors.borderDefault}; margin: 1.5rem 0; }
    p.is-editor-empty:first-child::before {
      content: attr(data-placeholder);
      color: ${({ theme }) => theme.colors.textTertiary};
      pointer-events: none;
      float: left;
      height: 0;
    }
  }
`;