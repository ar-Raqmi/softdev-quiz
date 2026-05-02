import React from 'react';

export default function CustomOptionRender({ type }: { type: string }) {
  if (type === 'Q42_A') {
    return (
      <div className="flex gap-4 font-mono text-sm pointer-events-none">
        <div>
          <div className="font-bold border-b pb-1 mb-1">id</div>
          <div>1<br/>2</div>
        </div>
        <div>
          <div className="font-bold border-b pb-1 mb-1">name</div>
          <div>Pirate<br/>Monkey</div>
        </div>
      </div>
    );
  }
  if (type === 'Q42_B') {
    return (
      <div className="flex gap-4 font-mono text-sm pointer-events-none">
        <div>
          <div className="font-bold border-b pb-1 mb-1">id</div>
          <div className="text-gray-400">--<br/>1<br/>2<br/>3<br/>4</div>
        </div>
        <div>
          <div className="font-bold border-b pb-1 mb-1">name</div>
          <div className="text-gray-400">----<br/><span className="text-black">Pirate</span><br/><span className="text-black">Monkey</span><br/><span className="text-black">Ninja</span><br/><span className="text-black">Spaghetti</span></div>
        </div>
        <div>
          <div className="font-bold border-b pb-1 mb-1">id</div>
          <div className="text-gray-400">--<br/><span className="text-black">2</span><br/>null<br/><span className="text-black">4</span><br/>null</div>
        </div>
        <div>
          <div className="font-bold border-b pb-1 mb-1">name</div>
          <div className="text-gray-400">----<br/><span className="text-black">Pirate</span><br/>null<br/><span className="text-black">Ninja</span><br/>null</div>
        </div>
      </div>
    );
  }
  if (type === 'Q42_C') {
    return (
      <div className="flex gap-4 font-mono text-sm pointer-events-none">
        <div>
          <div className="font-bold border-b pb-1 mb-1">id</div>
          <div>1<br/><br/>3</div>
        </div>
        <div>
          <div className="font-bold border-b pb-1 mb-1">name</div>
          <div>Pirate<br/><br/>Ninja</div>
        </div>
        <div>
          <div className="font-bold border-b pb-1 mb-1">id</div>
          <div>2<br/><br/>4</div>
        </div>
        <div>
          <div className="font-bold border-b pb-1 mb-1">name</div>
          <div>Pirate<br/><br/>Ninja</div>
        </div>
      </div>
    );
  }
  if (type === 'Q42_D') {
    return (
      <div className="flex gap-4 font-mono text-sm pointer-events-none">
        <div>
          <div className="font-bold border-b pb-1 mb-1">id</div>
          <div>2<br/><br/>4</div>
        </div>
        <div>
          <div className="font-bold border-b pb-1 mb-1">name</div>
          <div>Monkey<br/><br/>Spaghetti</div>
        </div>
        <div>
          <div className="font-bold border-b pb-1 mb-1">id</div>
          <div className="text-gray-400">null<br/><br/>null</div>
        </div>
        <div>
          <div className="font-bold border-b pb-1 mb-1">name</div>
          <div className="text-gray-400">null<br/><br/>null</div>
        </div>
      </div>
    );
  }
  if (type === 'Q51_A') {
    return (
      <div className="border border-gray-300 p-4 rounded bg-white text-black font-sans w-full max-w-sm pointer-events-none">
        <div className="text-sm bg-white -mt-7 inline-block px-1 ml-2">Personal information:</div>
        <div className="mt-2 text-sm flex items-center">First name: <input disabled value="Eric" className="ml-2 border border-black px-1 py-0.5 text-xs"/></div>
        <div className="mt-2 text-sm flex items-center">Last name: <input disabled value="Taylor" className="ml-2 border border-black px-1 py-0.5 text-xs"/></div>
        <div className="mt-4"><div className="bg-gray-200 border border-gray-400 px-3 py-1 text-xs inline-block text-gray-500">Submit</div></div>
      </div>
    );
  }
  if (type === 'Q51_B') {
    return (
      <div className="border border-gray-300 p-4 rounded bg-white text-black font-sans w-full max-w-sm pointer-events-none">
        <div className="text-sm bg-white -mt-7 inline-block px-1 ml-2">Personal information:</div>
        <div className="mt-2 text-sm flex flex-col gap-1">First name: <input disabled className="border border-black px-1 py-0.5 w-40"/></div>
        <div className="mt-2 text-sm flex flex-col gap-1">Last name: <input disabled className="border border-black px-1 py-0.5 w-40"/></div>
        <div className="mt-4 flex gap-2"><div className="bg-gray-200 border border-gray-400 px-3 py-1 text-xs inline-block text-gray-500">Submit</div><div className="bg-gray-200 border border-gray-400 px-3 py-1 text-xs inline-block text-gray-500">Clear</div></div>
      </div>
    );
  }
  if (type === 'Q51_C') {
    return (
      <div className="p-4 rounded bg-white text-black font-sans w-full max-w-sm border border-transparent pointer-events-none">
        <div className="text-sm">Personal information:</div>
        <div className="mt-2 text-sm flex flex-col gap-1">First name:<br/><input disabled value="Eric" className="border border-black px-1 py-0.5 w-40"/></div>
        <div className="mt-2 text-sm flex flex-col gap-1">Last name:<br/><input disabled value="Taylor" className="border border-black px-1 py-0.5 w-40"/></div>
        <div className="mt-4"><div className="bg-gray-200 border border-gray-400 px-3 py-1 text-xs inline-block text-gray-500">Submit</div></div>
      </div>
    );
  }
  if (type === 'Q51_D') {
    return (
      <div className="border border-gray-300 p-4 rounded bg-white text-black font-sans w-full max-w-sm pointer-events-none">
        <div className="text-sm bg-white -mt-7 inline-block px-1 ml-2">Personal information:</div>
        <div className="mt-2 text-sm flex items-center gap-2"><input type="radio" checked readOnly/> Eric</div>
        <div className="mt-2 text-sm flex items-center gap-2"><input type="radio" readOnly/> Taylor</div>
        <div className="mt-4"><div className="bg-gray-200 border border-gray-400 px-3 py-1 text-xs inline-block text-gray-500">Submit</div></div>
      </div>
    );
  }
  return null;
}
