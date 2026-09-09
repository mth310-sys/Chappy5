更新日: 2026-09-09

## 現在地点
- recordCount: **1115**
- latestRecordAdded: **政宗2**（大都技研）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-07-31_masamune2.md`
- chronologicalFrontier: **2017-07-31**
- frontierLatestMachine: **政宗2 — No.1115**
- schema: **resetBehavior v0.7**
- status: **2017-07-31_GROUP_OPEN_BOUNDARY_RESOLVED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1114「燃えよ！功夫淑女ドラゴン」を再取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFFと実レコードを進捗正本として採用。
- 開始時mainは **1114件 / chronologicalFrontier 2017-07-31 / 7/31群OPEN**。
- handoff指定の境界候補 **「政宗2」** を再監査し、No.1115として登録。
- performance core + resetBehavior v0.7を同時収集。
- 欠損判定前に「政宗2 / 政宗２ / 政宗2/A5 / 大都技研 / 7S0209」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン / 決戦ポイント / RT状態」を組み替え、HAZUSE、当時解析、複数攻略DB、後年整理資料を横断。

## No.1115 — 政宗2
- manufacturer: **大都技研**
- releaseDate canonical: **2017-07-31（一部地域先行）**
- generalReleaseDate: **2017-08-07（全国/一般導入）**
- releaseDateResolution: **REGIONAL_RELEASE_SPLIT_2017_07_31_EARLY_2017_08_07_GENERAL**。ちょんぼりすたが「一般導入8/7・一部地域7/31」と明示するため、真正面のCONFLICTではなく地域ロールアウト差として整理。
- formalModelName: **政宗2／A5**
- certificationNumber: **7S0209**
- generation/system: **5号機 / ART / 疑似ボーナス+ゲーム数上乗せART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_REGIONAL_RELEASE_DATE_SPLIT**

### performanceCore
- 機械割: **98.1 / 99.4 / 101.7 / 105.5 / 110.2 / 115.8%**。
- ART「隻眼ノ乱」初当たり: **1/587.8 / 556.9 / 571.6 / 475.9 / 525.0 / 375.7**。
- 奥州BONUS初当たり: **1/706.8 / 680.0 / 687.0 / 586.3 / 617.5 / 482.5**。
- 初当たり合算: **1/320.8 / 306.1 / 312.0 / 262.7 / 283.8 / 211.2**。
- ベース: **約44G/50枚**。
- ART「隻眼ノ乱」: **約2.0枚/G、1セット50G+α**。
- 奥州BONUS: **20G+α**の疑似ボーナス。
- 通常天井: **ART間999G**。
- minor conflict: 設定6機械割は複数資料 **115.8%** に対しpacnk **115.7%**。平均せず `CONFLICT_MINOR_ROUNDING_OR_TRANSCRIPTION_115_8_VS_115_7` として保持。

### resetBehavior v0.7
- settingChange:
  - 天井ゲーム数 **RESET**。
  - 内部状態 **低確**。
  - 決戦ポイント **RESET**。
  - RT状態 **CARRYOVER**。
  - 液晶ステージ **城下町**。
- pure power OFF→ON:
  - 天井ゲーム数 **CARRYOVER**。
  - 内部状態 **CARRYOVER**。
  - 決戦ポイント **CARRYOVER**。
  - RT状態 **CARRYOVER**。
  - 基本ステージは城下町。CZ/ART中に純電断のみの場合は当該状態を引き継ぐ資料あり。
- carryOver/stay setting: 「据え置き」と明記した独立表記を直接固定できず **UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH**。純電断契約から無条件転記しない。
- ceilingAfterReset: 通常999G。**短縮天井はNONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset: 朝一専用モード/設定変更時専用振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBenefits: 強い朝一優遇は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: 設定変更で天井進捗・決戦ポイントが消え、内部状態も低確へ戻るため、前日状況次第で客側に不利。
- resetDetection: 設定変更/純電断とも基本開始ステージが城下町のためステージ単独で確定判別不可。本機固有の確定ガックン発生率は **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2017-07-31群 / 次境界監査
- No.1113 バイオハザード リベレーションズ、No.1114 燃えよ！功夫淑女ドラゴン、No.1115 政宗2まで登録済み。
- 政宗2の日付競合は **一部地域7/31 / 一般8/7** の地域ロールアウト差として解決。chronological canonicalは最初の実導入7/31。
- 次回は **2017-07-31同日全メーカー横断漏れ監査を最優先**する。
- 現時点のカレンダー再確認では、7/31群として既登録のバイオハザード リベレーションズ、燃えよ！功夫淑女ドラゴン、地域先行の政宗2が主要候補。単一カレンダーだけでCLOSEせず、メーカー別/当時導入予定/旧DBを横断して漏れを最終監査する。
- 7/31群をCLOSEできたら次の未処理導入日へ進む。政宗2の一般導入8/7は同一機種重複登録しない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は新規本線No.1115を優先したため遡及カーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1115を再取得。
2. **1115件 / chronologicalFrontier 2017-07-31 / 7/31群OPEN_BOUNDARY_RESOLVED** を正本として継続。
3. **2017-07-31同日全メーカー横断漏れ監査**を行い、メーカー公式/業界記事/当時解析/旧DB/導入カレンダーを複数系統照合して群CLOSE可否を判定する。
4. 漏れ機種が見つかればその機種をNo.1116としてperformance core + resetBehavior v0.7で登録。漏れがなければ7/31群をCLOSED化して次導入日の未処理機種へ進む。
5. 政宗2は8/7一般導入表記があっても同一機種のため重複登録しない。
6. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1115 政宗2
- HAZUSE: https://hazuse.com/machine/pachislot/7S0209/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/41130/
- なな徹: https://nana-press.com/kaiseki/machine/75/1367/
- スロット解析情報~すろかい~: https://slotkaiseki.hatenablog.com/entry/masmune
- スロパチネット: https://slopachi-net.com/masamune2
- 一撃 ART概要: https://1geki.jp/slot/s_masamune2/81/
- パチセブン: https://pachiseven.jp/machines/5250/cutout/78
- すろぱちくえすと: https://www.slopachi-quest.com/article/masamune2/
- pacnk: https://pacnk.com/slot/tools/sh_seimuneni.html

### 7/31群監査補助
- すろぱちくえすと 2017導入一覧: https://www.slopachi-quest.com/article/2017-sindai/
- 一撃 2017年8月導入カレンダー: https://1geki.jp/newmachinecalender/201708/
