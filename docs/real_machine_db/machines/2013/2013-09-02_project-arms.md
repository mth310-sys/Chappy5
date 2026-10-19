# パチスロ PROJECT ARMS

machineName: パチスロ PROJECT ARMS
manufacturer: ニューギン
releaseDate: 2013-09-02
releaseDatePrecision: exact_day_multi_source
generation: 5号機
systemType: A+ART / ボーナス+ART / CZ
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL

## identity

- ホール導入開始: **2013-09-02**。K-Navi、パチビー、パチスロ解析DBで一致し、グリーンべると当時業界記事も「9月2日から納品開始予定」とする。
- manufacturer: **ニューギン**。
- 型式名: **プロジェクトアームズW**。後年筐体DB・中古実機DBで一致。
- 5号機クロニクルは導入時期を **2013/8** と掲載するが、当時業界記事と複数の具体導入日DBは2013-09-02で一致するため、本DBでは exact day の2013-09-02を主値として採用し、月表記差をCONFLICTとして保持。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.6% |
| 2 | 99.5% |
| 3 | 100.3% |
| 4 | 104.2% |
| 5 | 109.8% |
| 6 | 116.6% |

- パチスロ解析DBと5号機クロニクルで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART「ARMS RUSH」初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/688 |
| 2 | 1/637 |
| 3 | 1/635 |
| 4 | 1/576 |
| 5 | 1/562 |
| 6 | 1/451 |

- グリーンべると当時業界記事は設定1 1/688.0〜設定6 1/451.0を掲載。
- パチスロ解析DBと5号機クロニクルは全設定値で一致。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

### ボーナス

| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/442.8 | 1/565.0 | 1/248.2 |
| 2 | 1/442.8 | 1/555.4 | 1/246.4 |
| 3 | 1/442.8 | 1/520.2 | 1/239.2 |
| 4 | 1/439.8 | 1/504.1 | 1/234.9 |
| 5 | 1/439.8 | 1/489.1 | 1/231.6 |
| 6 | 1/439.8 | 1/474.9 | 1/228.3 |

- グリーンべると、パチスロ解析DB、5号機クロニクルで主要値を照合。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **平均約33G/50枚（1000円）**。
- パチスロ解析DBの掲載値。
- 今回、同一定義の独立した別系統数値を確定できなかったため単一解析資料値として保持。
- confidence: ANALYSIS_SINGLE

## netIncrease

- ART「ARMS RUSH」: **1セット30〜300G+α / 純増約1.5枚/G / 継続率50〜90%**。
- グリーンべると、K-Navi、パチビー、パチマガスロマガで一致。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: **平均約204枚**。
- REG: **平均約60枚**。
- ART: **30〜300G+α / 約1.5枚/G**。
- グリーンべると、パチビー、パチマガスロマガ、パチスロ解析DBで照合。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時には **低確 / 高確 / 超高確** の内部状態が存在し、滞在状態でART当選期待度が変化する。
- ART突入経路としてCZ「ARMSチャレンジ」、共振MODE、トランスMODE、ボーナス、レア役直撃等を持つ。
- 通常天井は解析資料上 **ボーナス間1200G**。到達後は前兆を経由してARTへ移行し、高継続ARTが期待される旨が掲載されている。
- ただし、パチスロ解析DBの天井節見出しに別機種「RAVE エンドレスラッシュ」の名称が混入する編集誤記があるため、1200G天井は `ANALYSIS_SINGLE_WITH_PAGE_TRANSCRIPTION_WARNING` として扱い、別機種仕様を自動転記しない。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_CEILING_COUNTER_CLEAR_SINGLE_DIRECT__CARRYOVER_POWER_CYCLE_STATE_DETECTION_UNVERIFIED_AFTER_MULTI_QUERY_MULTI_SOURCE_RESEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- パチスロ解析DBの本機ページには、**設定変更後は天井到達までのゲーム数がクリアされる**との直接記述がある。
- 本機固有の設定変更時モード再抽選、低確/高確/超高確の初期状態振り分け、CZ関連状態の初期化仕様は、機種名・型式名・メーカー名と「設定変更 / リセット / 朝一 / モード / 状態 / 天井」を組み替え、K-Navi、パチマガスロマガ、当時解析、旧DB、回顧資料を横断したが **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- 純据え置き時のボーナス間天井G、内部状態、CZ関連状態をどの粒度で保持するかを直接明示した本機専用資料は **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時のゲーム数クリアから据え置き時の保持を逆算しない。

### powerCycleBehavior

- 設定変更を伴わない **電源OFF→ONのみ** の天井G / 内部状態 / 液晶状態の扱いは、検索語を「電源OFF ON / 電断 / 再起動 / 朝一 / 据え置き」へ変更して再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機挙動から補間しない。

### gameCounterReset

- setting change: **CLEAR_CONFIRMED_SINGLE_DIRECT_ANALYSIS_SOURCE**。
- pure carry-over: **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常天井: **ボーナス間1200G**（ANALYSIS_SINGLE_WITH_PAGE_TRANSCRIPTION_WARNING）。
- 設定変更時は前日までの天井進捗をクリアする直接記述あり。
- 設定変更専用の固定短縮天井や朝一専用天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

### modeAfterReset

- 本機は低確 / 高確 / 超高確の内部状態を持つが、設定変更時の専用モード・状態振り分け表は **UNVERIFIED_AFTER_RESEARCH**。
- 通常時の状態移行解析は存在するが、v0.7対象外の通常全状態移行表は収集しない。

### stateAfterReset

- 設定変更時の低確 / 高確 / 超高確の初期化・再抽選仕様: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き / 電源OFF→ON時の状態引継ぎ: **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の天井短縮、専用CZ、専用高確、特定G以内当選率などの公開恩恵: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更時は前日のボーナス間天井進捗がクリアされるため、前日ハマリの宵越し天井進捗をそのまま利用する狙いには不利。
- その他の設定変更専用不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、初期出目、液晶ステージ、ランプ、表示による設定変更 / 据え置き判別は、機種名・型式名「プロジェクトアームズW」と「ガックン / 変更判別 / 朝一 / 初期出目」を組み替えて再探索したが **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更時の前日天井進捗: **CLEAR_CONFIRMED_SINGLE_DIRECT_ANALYSIS_SOURCE**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時モード / 状態振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 朝一特定G以内のART/CZ当選率: **UNVERIFIED_AFTER_RESEARCH**。
- 朝一恩恵発生率: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts / safeguards

- releaseDate: K-Navi / パチビー / パチスロ解析DBは **2013-09-02**、当時グリーンべるとも9月2日納品開始予定。一方、5号機クロニクルのみ **2013/8** とする。`CONFLICT_RELEASE_MONTH_RETROSPECTIVE_2013-08_VS_EXACT_MULTI_SOURCE_2013-09-02`。具体日一致を優先してreleaseDateは2013-09-02。
- パチスロ解析DBの天井節は見出しに「RAVE エンドレスラッシュ」と別機種名が混入している。本文はPROJECT ARMSページ内で「ボーナス間1200G」「設定変更後クリア」とするが、転記事故の可能性を考慮し、天井値とリセット天井契約は単一直接資料として信頼度を抑える。
- K-Navi / パチマガスロマガには本機専用の「朝イチ・設定変更」攻略項目が存在すること自体は確認できるが、今回取得可能な本文から具体値・契約を安全に回収できなかったため推測で埋めない。
- CR PROJECT ARMS（藤商事、2013-12-16）を本機へ混入させない。

## sources

取得日: **2026-09-06**

1. グリーンべると「ニューギン、SFアクション超大作をパチスロ化」
   - https://web-greenbelt.jp/00006797/
   - 2013-07-16記事。9月2日納品開始予定、A+ART、純増1.5枚/G、30〜300G+α、継続率50〜90%、BIG/REG、設定1〜6のボーナス・ART主要確率。
   - confidence: INDUSTRY

2. K-Navi「PROJECT ARMS」
   - https://p-kn.com/slot/1900/
   - ホール導入開始2013-09-02、A+ART構造、ART 30〜300G+α / 約1.5枚/G / 50〜90%、CZ・内部状態解析メニュー、朝イチ・設定変更攻略項目の存在。
   - confidence: ANALYSIS_HIGH

3. パチビー「パチスロ PROJECT ARMS」
   - https://www.pachibee.jp/machines/index/213080003
   - 導入日2013-09-02、5号機ART、天井あり、BIG約204枚、REG約60枚、ART30〜300G+α・約1.5枚/G。
   - confidence: ANALYSIS_HIGH

4. パチスロ解析DB「パチスロPROJECT ARMS(ニューギン)」
   - https://pachislo-data.com/newgin/projectarms
   - 2013-09-02、平均33G/1000円、全設定のボーナス合算・ART初当たり・機械割、低確/高確/超高確、ボーナス間1200G天井、設定変更時天井Gクリア。
   - 天井節の見出しに別機種名混入があるため、その節のみ confidence: ANALYSIS_SINGLE_WITH_TRANSCRIPTION_WARNING。
   - その他性能表 confidence: ANALYSIS_HIGH。

5. パチマガスロマガ「パチスロ PROJECT ARMS」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/27/newgin_slot_27.php
   - ボーナス+ART、ART純増約1.5枚/G、30〜300G+α、BIG約204枚、REG約60枚。「天井・ヤメ時」「朝イチ・設定変更」専用攻略項目の存在を確認。
   - confidence: ANALYSIS_HIGH

6. 5号機クロニクル「ニューギン＆エキサイト 5号機全機種一覧」
   - https://5goki.com/newgin-excite
   - 全設定BIG/REG/合算/ART初当たり/機械割を照合。導入時期は2013/8表記で具体日資料と競合。
   - confidence: RETROSPECTIVE_ANALYSIS

7. pachinko’s blog「ニューギン『パチスロ PROJECT ARMS』の筺体＆情報」
   - https://pachinko.hatenablog.jp/entry/2013/09/project-arms
   - 型式名プロジェクトアームズW、2013年9月、A+ART、純増約1.5枚/G。
   - confidence: SECONDARY_ARCHIVE

8. 中一商事「ニューギン パチスロ PROJECT ARMS」
   - https://www.nakaiti.com/html/sNyugin010.html
   - 型式名プロジェクトアームズW、5号機、BIG約204枚、REG約60枚。
   - confidence: SECONDARY_MACHINE_DB

## missingFields

- 本機固有の据え置き時の天井G / 内部状態引継ぎ契約。
- 設定変更なし電源OFF→ON時の天井G / 内部状態 / 表示契約。
- 設定変更時の内部状態振り分け・朝一専用モードの有無。
- ガックン / 初期出目 / 液晶等の変更判別契約。
- 朝一特定G以内の当選率、リセット恩恵発生率などの公開数値。
- baseGamesPer50の独立した二次照合。
- ボーナス間1200G天井と設定変更時クリアの独立二次照合。

## conflicts

- `CONFLICT_RELEASE_MONTH_RETROSPECTIVE_2013-08_VS_EXACT_MULTI_SOURCE_2013-09-02`。
- `SOURCE_TRANSCRIPTION_WARNING_CEILING_SECTION_OTHER_MACHINE_NAME_RAVE`。
