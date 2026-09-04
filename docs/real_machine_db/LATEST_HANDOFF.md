# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **627**
- latestMachineAdded: **ハイパー娘**（SNKプレイモア）
- latestRecord: `docs/real_machine_db/machines/2011-12-19_hyper-musume.md`
- chronologicalFrontier: **2011-12-19**
- frontierLatestExactDateMachine: **ハイパー娘**
- schema: **resetBehavior v0.7**
- status: **2011-12-19_GROUP_IN_PROGRESS**

## 今回の本線追加 — ハイパー娘

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パチスロ ぷよぷよ！」を再取得して開始。
- 開始時正本は **recordCount 626 / chronologicalFrontier 2011-12-05**。INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- 2011-12-05同日群を再監査。HAZUSEでは次枠が12/09・12/16・12/19。P-WORLD月次一覧では2011年12月のパチスロは4機種（PiaキャロットへようこそG.O. / トリプルチャンスV-30 / ハイパー娘 / ぷよぷよ!M）。12/06〜12/18で新たな具体日付き未登録パチスロを確定できなかったため12/19群へ進行。
- GitHub repo code searchで「ハイパー娘」未検出を確認し627件目として追加。
- K-Navi・パチビーが導入日 **2011-12-19** で一致。当時グリーンべるとは **2011-12-18から納品予定** としており整合。
- SNK PLAYMORE公式で型式名 **ハイパー娘A** を確認。検定番号は検索語・資料系統を変えても直接確定できずUNVERIFIED_AFTER_RESEARCH。

### 性能コア

- 機械割: **96.6 / 98.3 / 99.9 / 104.8 / 109.7 / 113.6%**。P-WORLD・パチマガスロマガ一致。
- BIG: **1/442.8 → 1/404.5**、REG: **1/682.7 → 1/512.0**、ART初当たり: **1/292.5 → 1/157.1**。K-Navi・P-WORLD・パチマガスロマガで照合。
- 50枚ベース: **31.30 / 31.30 / 31.31 / 31.32 / 31.33 / 31.34G/50枚**。パチマガスロマガ直接表。
- ART「バトルチャンス」: **1R30G、最大5R=150G+α、純増約+1.5枚/G**。公式・業界・複数解析で照合。
- 赤7BIG約**306枚**、黄/青BIG約**210枚**、REG約**35枚**。
- 通常天井は **ボーナス&ART間999Gで第1天井 / 1111Gで第2天井（ART5セット以上）**。

### resetBehavior v0.7

- `settingChangeBehavior`: **PARTIAL_CONFIRMED**。当時天井攻略資料で設定変更により天井までのゲーム数がリセットされることを確認。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **CONFIRMED_RESET_ON_SETTING_CHANGE**。
- `ceilingAfterReset`: **NO_RESET_SHORTENING_CONFIRMED**。通常999G/1111Gは確認したが設定変更専用短縮値なし。
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **CONFIRMED_PREVIOUS_CEILING_PROGRESS_LOST_ON_SETTING_CHANGE**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機挙動や他SNK機からの補完はしていない。

## conflicts

- 「のせのせタイム」継続率上限はグリーンべると/K-Naviが **最大95%**、パチマガスロマガが **66〜90%**。平均せずCONFLICTとしてレコードへ保存。

## 時系列監査

- 2011-12-05群は今回の再監査で追加漏れを確定できず、本線は12/19へ前進。
- 12/09・12/16はHAZUSEに日付枠があるが、今回のP-WORLD月次一覧・K-Navi・メーカー/業界検索では、その日付に置くべき未登録パチスロを具体的に確定できなかった。
- 12/19群では「ハイパー娘」を追加。
- 同月P-WORLD掲載の残候補は **PiaキャロットへようこそG.O.** と **トリプルチャンスV-30**。ぷよぷよ!Mは既登録。Piaキャロはパチビーで12/19を確認済み。トリプルチャンスV-30は2011/12までは複数DBで確認できるが具体日をまだ確定できていない。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 627 / chronologicalFrontier 2011-12-19**から開始。
2. 2011-12-19同日群を継続。
3. 最優先候補 **PiaキャロットへようこそG.O.** をGitHub未登録確認後、性能コア+resetBehavior v0.7で処理。
4. 次に **トリプルチャンスV-30** の具体導入日をHAZUSE/K-Navi/当時業界/メーカー・旧DBで再探索。具体日が12/19以前なら時系列位置を補正し、月単位しか確定できなければCONFLICT/UNVERIFIEDを明示して漏れなく登録判断。
5. 12/19群を閉じた後、2011年12月末残存→2012年1月03日以降へ進む。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックンを組み替えて再探索。競合値は平均せずCONFLICT。

## 主要出典 — 今回取得日 2026-09-05

### ハイパー娘
- SNK PLAYMORE公式: `https://slot.snk-corp.co.jp/official/hyper_musume/`
- グリーンべると: `https://web-greenbelt.jp/00002394/`
- K-Navi: `https://p-kn.com/slot/1536/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6552`
- パチビー: `https://www.pachibee.jp/machines/lecture/211110002`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/37/a.php`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/37/h.php`
- パチマガスロマガ 小役/ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/37/c.php`
- 当時天井攻略資料: `https://mezase20.com/blog-entry-495.html`

### 時系列監査
- HAZUSE 2011年12月カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`
- P-WORLD 2011年12月新台一覧: `https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2011-12`

### 今回のGitHub commit
- 627番レコード追加: `e5cfe679f45133db9df297c593a7663b61cab0b5`

### 次回順序確認
- **2011-12-19「PiaキャロットへようこそG.O.」→ トリプルチャンスV-30具体日再照合 → 12月群最終監査。**
