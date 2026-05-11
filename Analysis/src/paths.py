from pathlib import Path

# analysis project root = parent of /src
project_root = Path(__file__).resolve().parents[1]


# main analysis folders

data_dir = project_root / "Data"
outputs_dir = project_root / "Outputs"
notebooks_dir = project_root / "Notebooks"
src_dir = project_root / "src"


# survey data folders

survey_dir = data_dir / "Survey"
survey_raw_dir = survey_dir / "Raw"
survey_cleaned_dir = survey_dir / "Cleaned"

# survey raw subfolders
survey_data_raw_dir = survey_raw_dir / "Survey Data Raw"
survey_data_numeric_dir = survey_raw_dir / "Survey Data Converted in to the numeric"

# survey cleaned files
merged_cleaned_csv_file = survey_cleaned_dir / "merged_cleaned_data.csv"
merged_cleaned_excel_file = survey_cleaned_dir / "merged_cleaned_data.xlsx"
pre_cleaned_file = survey_cleaned_dir / "pre_cleaned.csv"
post_cleaned_file = survey_cleaned_dir / "post_cleaned.csv"


# decision log data folders

decision_logs_dir = data_dir / "Decision_Logs"
decision_logs_raw_dir = decision_logs_dir / "Raw"
decision_logs_interim_dir = decision_logs_dir / "Interim"
decision_logs_cleaned_dir = decision_logs_dir / "Cleaned"
decision_logs_documentation_dir = decision_logs_dir / "Documentation"

# decision log files
master_decision_logs_file = decision_logs_interim_dir / "master_decision_logs.csv"
decision_logs_cleaned_file = decision_logs_cleaned_dir / "decision_logs_cleaned.csv"
decision_logs_cleaned_with_ids_file = decision_logs_cleaned_dir / "decision_logs_cleaned_with_ids.csv"
scenario_choice_reference_file = decision_logs_documentation_dir / "scenario_choice_reference.csv"


# output folders

survey_outputs_dir = outputs_dir / "Survey"
survey_figures_dir = survey_outputs_dir / "figures"
survey_tables_dir = survey_outputs_dir / "tables"

decision_logs_outputs_dir = outputs_dir / "Decision_Logs"
decision_logs_figures_dir = decision_logs_outputs_dir / "figures"
decision_logs_tables_dir = decision_logs_outputs_dir / "tables"


# decision log output files

run_level_summary_file = decision_logs_tables_dir / "run_level_summary.csv"
run_outcome_summary_file = decision_logs_tables_dir / "run_outcome_summary.csv"
scenario_choice_summary_file = decision_logs_tables_dir / "scenario_choice_summary.csv"
top_choice_by_scenario_file = decision_logs_tables_dir / "top_choice_by_scenario.csv"
scenario_selected_effects_file = decision_logs_tables_dir / "scenario_selected_effects.csv"

scenario_choice_fig_file = decision_logs_figures_dir / "scenario_choice_percentages.png"
run_outcome_fig_file = decision_logs_figures_dir / "completed_vs_ended_early_outcomes.png"


# make sure folders exist

data_dir.mkdir(parents=True, exist_ok=True)
outputs_dir.mkdir(parents=True, exist_ok=True)
notebooks_dir.mkdir(parents=True, exist_ok=True)
src_dir.mkdir(parents=True, exist_ok=True)

survey_dir.mkdir(parents=True, exist_ok=True)
survey_raw_dir.mkdir(parents=True, exist_ok=True)
survey_cleaned_dir.mkdir(parents=True, exist_ok=True)
survey_data_raw_dir.mkdir(parents=True, exist_ok=True)
survey_data_numeric_dir.mkdir(parents=True, exist_ok=True)

decision_logs_dir.mkdir(parents=True, exist_ok=True)
decision_logs_raw_dir.mkdir(parents=True, exist_ok=True)
decision_logs_interim_dir.mkdir(parents=True, exist_ok=True)
decision_logs_cleaned_dir.mkdir(parents=True, exist_ok=True)
decision_logs_documentation_dir.mkdir(parents=True, exist_ok=True)

survey_outputs_dir.mkdir(parents=True, exist_ok=True)
survey_figures_dir.mkdir(parents=True, exist_ok=True)
survey_tables_dir.mkdir(parents=True, exist_ok=True)

decision_logs_outputs_dir.mkdir(parents=True, exist_ok=True)
decision_logs_figures_dir.mkdir(parents=True, exist_ok=True)
decision_logs_tables_dir.mkdir(parents=True, exist_ok=True)