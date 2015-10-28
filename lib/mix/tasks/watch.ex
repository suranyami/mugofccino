defmodule Mix.Tasks do
  defmodule Watch do
    use Mix.Task
    use ExFSWatch, dirs: ["./lib"]
    
    @shortdoc "Watches the lib dir and recompiles."

    def run(args) do
      IO.puts (inspect args)
    end

    def callback(:stop) do
      IO.puts "STOP"
    end
    
    def callback(file_path, events) do
      IO.inspect {file_path, events}
      Mix.Task.run("compile", ["--force"])
    end
  end
end
