function App() {
  return (
    <main className="bg-[rgba(244,208,78,1)] h-screen flex justify-center items-center">
      <div className="w-[384px] h-[522px] bg-white rounded-[20px] border-1 border-[rgba(17,17,17,1)]"></div>

      <div className="fab fab-flower">
        {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-lg btn-info btn-circle"
        >
          F
        </div>

        {/* Main Action button replaces the original button when FAB is open */}
        <button className="fab-main-action btn btn-circle btn-lg btn-success">
          M
        </button>

        {/* buttons that show up when FAB is open */}
        <div className="tooltip tooltip-left" data-tip="Label A">
          <button className="btn btn-lg btn-circle">A</button>
        </div>
        <div className="tooltip tooltip-left" data-tip="Label B">
          <button className="btn btn-lg btn-circle">B</button>
        </div>
        <div className="tooltip" data-tip="Label C">
          <button className="btn btn-lg btn-circle">C</button>
        </div>
        <div className="tooltip" data-tip="Label D">
          <button className="btn btn-lg btn-circle">D</button>
        </div>
      </div>
    </main>
  );
}

export default App;
