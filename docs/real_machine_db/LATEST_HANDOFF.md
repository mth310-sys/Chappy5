# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **624**
- latestMachineAdded: **クイーンジャック-30**（岡崎産業）
- latestRecord: `docs/real_machine_db/machines/2011-11-21_queen-jack-30.md`
- chronologicalFrontier: **2011-11-21**
- frontierLatestExactDateMachine: **クイーンジャック-30**
- schema: **resetBehavior v0.7**
- status: **2011-11-21_GROUP_CLOSED_ADVANCE_TO_2011-12-02**

## 今回の本線追加 — クイーンジャック-30

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「クイーンジャック」を再取得して開始。
- 開始時正本は **recordCount 623 / chronologicalFrontier 2011-11-21**。INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- LATEST_HANDOFF最優先候補の30Φ派生「クイーンジャック-30」を調査し、repo code search未検出を確認して624件目として追加。
- P-WORLD個別ページで独立機種、型式名 **クイーンジャック-30**、検定番号 **1S0667** を確認。
- パチンコビレッジで導入日 **2011-11-21**、25Φ/30Φ同時リリース、ゲーム性同一を確認。
- グリーンべると系当時記事は2011-11-20納品開始予定。releaseDateはホール導入日定義を優先して2011-11-21。

### 性能コア

- 5号機 / ノーマル / Aタイプ / BIG+REG / 30Φ。
- BIG最大約 **321枚**、REG約 **104枚**をP-WORLD 30Φ個別ページとパチンコビレッジで機種固有クロスチェック。
- ART/AT/RTなし。天井なし。
- 25Φ版には設定別機械割・BIG/REG確率が公開されているが、30Φ型式1S0667に同一数値を明示する設定別直接表は今回確定できず、**推測転記しない**。
- `payoutRateBySetting` / `initialHitBySetting` は **UNVERIFIED_AFTER_RESEARCH_FOR_30PHI_VARIANT**。
- `baseGamesPer50` は機種名表記揺れ・型式1S0667・50枚/1000円/1k/コイン持ち/ベース/回転数で資料系統を変えて再探索したが直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- coreStatus: **PARTIAL_CORE_SETTING_SPEC_AND_BASE_UNVERIFIED**。

### resetBehavior v0.7

- 30Φ個別資料でノーマルタイプかつ **天井なし**を確認。
- `gameCounterReset` / `ceilingAfterReset`: **NOT_APPLICABLE**。
- 持続的規定G数モード、ART/AT/CZ、朝一専用モードは確認しないため `modeAfterReset` は **NOT_APPLICABLE_NO_PERSISTENT_GAMEPLAY_MODE_CONFIRMED**。
- 有利区間は制度導入前の5号機なので **NOT_APPLICABLE**。
- 設定変更時の天井短縮・朝一CZ/ART・専用モード優遇等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更/据え置き/単純電源OFF→ON時のリール位置・デジタル表示・一時告知状態、ガックン/初期出目等の変更判別は、機種名/型式と設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/初期出目/デジタル表示を組み替えて再探索しても本機固有の直接根拠を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- resetQaStatus: **RESET_BEHAVIOR_APPLICABILITY_CONFIRMED_WITH_MACHINE_SPECIFIC_DETAILS_UNVERIFIED**。

### CONFLICT / 粒度

- 25Φ版の設定別性能を30Φへ自動転記していないため、30Φ固有の観測値CONFLICTは現時点で作らない。
- 5号機クロニクルは「クイーンジャック」1項目で扱う一方、P-WORLD・パチンコビレッジ等は30Φを独立機種として扱う。独立型式 **1S0667** の存在を優先し、全機種方針上は別レコードとする。

## 時系列監査

- HAZUSE新台カレンダーでは2011年11月の最後の導入枠が **11月21日**。
- 次のカレンダー枠は **2011年12月02日**で、11月22日～11月30日の別導入枠は掲載されていない。
- 11/21既知群（巨人の星V / 赤ドン雅 / ミラクルジャグラー / 黒ひげ危機一発 / クイーンジャック / クイーンジャック-30、ストリートファイターIVの11/21資料CONFLICTは既存11/07レコード内保持）との突合を完了し、**2011-11-21同日群を閉鎖**。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 624 / chronologicalFrontier 2011-11-21**から開始。
2. 2011-11-21同日群は閉鎖済み。次は **2011-12-02** 枠を最優先で監査する。
3. HAZUSE 2011年12月カレンダーの12/02枠、K-Navi、メーカー別一覧、当時業界記事を横断し、その日のパチスロ機種名を確定 → repo重複確認 → 最初の未登録機から625件目候補として処理。
4. 12/02枠で対象機がない/日付定義のみの場合は、12/05枠へ飛ばす前に12/01～12/04の納品日・導入日を業界記事で漏れ監査する。
5. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/周期/モード/状態/ガックン/有利区間を組み替えて再探索。
6. 競合値は平均せずCONFLICT。一般則・別径版からの性能補完は禁止。

## 主要出典 — 今回取得日 2026-09-05

### クイーンジャック-30
- P-WORLD: `https://www.p-world.co.jp/machine/database/6544`
- パチンコビレッジ: `https://www.pachinkovillage.com/search/?M=3706`
- グリーンべると / P-WORLD業界ニュース（2011-11-02）: `https://news.p-world.co.jp/articles/4976/greenbelt`
- P-WORLD機種一覧: `https://www.p-world.co.jp/_machine/t_machine.cgi?aflag=1&key=,%EF%BF%BD%CB%A3%D0%A3%EF%BF%BD,&mode=0&start=1250`
- パチンコFAN機種一覧: `https://pacnk.com/photoslot/plist52_0_0.html`
- スロリスクタイム ノーマルタイプ一覧: `https://pachisuro100.com/normal/`

### 時系列監査
- HAZUSE新台カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`

### 今回のGitHub commit
- 624番レコード追加: `cc7e2154634c46c10f59de2e7cb4fe3b5c6aee80`

### 次回順序確認
- **2011-12-02枠の実機候補を確定 → repo重複確認 → 未登録なら625件目として性能コア＋resetBehavior v0.7を収集。**
