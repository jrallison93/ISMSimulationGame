from pathlib import Path

# analysis project root = parent of /src
project_root = Path(__file__).resolve().parents[1]

data_dir = project_root / "Data"
raw_dir = data_dir / "Raw"
cleaned_dir = data_dir / "Cleaned"

# raw data subfolders
survey_data_raw_dir = raw_dir / "Survey Data Raw"
survey_data_numeric_dir = raw_dir / "Survey Data Converted in to the numeric"

# decision log data subfolders
decision_logs_dir = data_dir / "Decision_Logs"
decision_logs_raw_dir = decision_logs_dir / "Raw"
decision_logs_interim_dir = decision_logs_dir / "Interim"
decision_logs_cleaned_dir = decision_logs_dir / "Cleaned"
decision_logs_documentation_dir = decision_logs_dir / "Documentation"

# decision log files
combined_decision_logs_file = decision_logs_interim_dir / "combined_decision_logs.csv"
cleaned_decision_logs_file = decision_logs_cleaned_dir / "decision_logs_cleaned.csv"
run_level_summary_file = decision_logs_cleaned_dir / "run_level_summary.csv"

# outputs
outputs_dir = project_root / "Outputs"
figures_dir = outputs_dir / "figures"
tables_dir = outputs_dir / "tables"

# decision log outputs
decision_logs_outputs_dir = outputs_dir / "Decision_Logs"
decision_logs_figures_dir = decision_logs_outputs_dir / "figures"
decision_logs_tables_dir = decision_logs_outputs_dir / "tables"

notebooks_dir = project_root / "Notebooks"
src_dir = project_root / "src"

# make sure folders exist
data_dir.mkdir(parents=True, exist_ok=True)
raw_dir.mkdir(parents=True, exist_ok=True)
cleaned_dir.mkdir(parents=True, exist_ok=True)

survey_data_raw_dir.mkdir(parents=True, exist_ok=True)
survey_data_numeric_dir.mkdir(parents=True, exist_ok=True)

decision_logs_dir.mkdir(parents=True, exist_ok=True)
decision_logs_raw_dir.mkdir(parents=True, exist_ok=True)
decision_logs_interim_dir.mkdir(parents=True, exist_ok=True)
decision_logs_cleaned_dir.mkdir(parents=True, exist_ok=True)
decision_logs_documentation_dir.mkdir(parents=True, exist_ok=True)

outputs_dir.mkdir(parents=True, exist_ok=True)
figures_dir.mkdir(parents=True, exist_ok=True)
tables_dir.mkdir(parents=True, exist_ok=True)

decision_logs_outputs_dir.mkdir(parents=True, exist_ok=True)
decision_logs_figures_dir.mkdir(parents=True, exist_ok=True)
decision_logs_tables_dir.mkdir(parents=True, exist_ok=True)

notebooks_dir.mkdir(parents=True, exist_ok=True)
src_dir.mkdir(parents=True, exist_ok=True)