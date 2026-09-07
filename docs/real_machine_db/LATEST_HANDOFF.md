# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **897**
- latestRecordAdded: **鬼神7**（アイ電子）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-07-13_onigami7.md`
- chronologicalFrontier: **2015-07-13**
- frontierLatestMachine: **鬼神7**
- frontierRecord: `docs/real_machine_db/machines/2015-07-13_onigami7.md`
- schema: **resetBehavior v0.7**
- status: **2015-07-13_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.896 `2015-07-06_my-juggler-iii.md` を再読。
- INDEXは19件時点の旧集約状態なので、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **896件 / 2015-07-06 / 07-06_GROUP_CLOSED**。
- handoff指定どおり2015-07-13同日群へ前進し、最初の強い未処理機「鬼神7」をNo.897として登録。

## No.897 — 鬼神7

- record: `docs/real_machine_db/machines/2015-07-13_onigami7.md`
- manufacturer canonical: **アイ電子**
- generation: **5号機**
- systemType: **A+ART / 技術介入 / 完走型ART**
- formalModelName: **オニガミセブンX**
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**

### 導入日 / メーカー表記

- K-Navi 2015年7月カレンダーは **2015-07-13**。同カレンダーは全国一斉導入開始日を掲載すると明記。
- 当時攻略のちょんぼりすたも **2015-07-13** で一致。
- メーカー/ブランド欄は資料差があり、パチマガスロマガ・当時攻略・中古実機資料は **アイ電子**、P-WORLDは **アイゲート**、K-Naviは **ハイライツ・エンタテインメント**。
- `MANUFACTURER_BRAND_LABEL_CONFLICT_AIDENSHI_VS_IGATE_VS_HIGHLIGHTS` として保持し、本DBcanonicalはアイ電子。
- グリーンべると2019年記事ではハイライツ社の市場設置機一覧にオニガミセブンXを掲載しており、企業/販売・後継事業者表記差として扱う。

### 性能コア

- 通常攻略機械割: **96.8 / 97.7 / 99.6 / 101.5 / 103.6 / 106.8%**。
- 完全攻略（BIG中技術介入100%）: **98.5 / 99.4 / 101.4 / 103.4 / 105.5 / 108.9%**。
- 闘神BIG: **1/829.6 / 780.2 / 789.6 / 712.4 / 728.2 / 648.9**。
- BIG: **1/448.9 / 428.3 / 431.2 / 417.4 / 422.8 / 399.6**。
- REG: **1/500.3 / 442.8 / 464.8 / 402.1 / 422.8 / 344.9**。
- 合算: **1/184.1 / 170.2 / 174.3 / 159.1 / 163.8 / 144.0**。
- ART「飛翔の刻」: **50G or 100G / 純増約1.0枚/G / 完走型**。
- 闘神BIG最大**288枚**、BIG最大**204枚**、REG**96枚**。
- 「運命選択の刻」は約1/100発生とする資料があり、押し順2択正解でART突入。
- 50枚ベースは、当時攻略にも「調査中」と残り、検索語/資料系統変更後も比較可能な実数を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 技術介入あり/なしの機械割は定義差なので平均しない。

### resetBehavior v0.7

- 当時攻略で**天井なし・ゾーンなし**を確認。ゲーム数天井/規定Gモード、リセット短縮天井は `NOT_APPLICABLE`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 設定変更時のART/CZ/RT本機固有内部状態、据え置き時の持越し、設定変更なしの純電源OFF→ONを独立条件とした内部契約は、機種名/型式名/メーカー・販売ブランド名と「設定変更/リセット/朝一/据え置き/電源OFF ON」を組み替え、当時解析・旧DB・中古実機・後年回顧まで再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用モード、高確スタート率、設定変更専用CZ/ART優遇率、朝一特定G以内当選率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ガックン/初期出目/液晶/ステージによる本機固有変更判別も `NONE_CONFIRMED_AFTER_RESEARCH`。
- 一般的な5号機A+ART/RT機の挙動から補完しない。

### conflicts / definition control

- `MANUFACTURER_BRAND_LABEL_CONFLICT_AIDENSHI_VS_IGATE_VS_HIGHLIGHTS`。
- `SYSTEM_LABEL_ART_VS_RT`: P-WORLD/パチマガはART、当時攻略/中古実機はRT表記。性能実態は50/100G・約1.0枚/Gの完走型増加区間で一致。
- `PAYOUT_DEFINITION_TECH_INTERVENTION`: 通常攻略96.8〜106.8% / 完全攻略98.5〜108.9%。平均しない。

## 2015-07-13群監査 — OPEN

処理済み:
1. **鬼神7** — アイ電子（資料上アイゲート/ハイライツ表記差あり）— No.897。

未処理の強い候補:
1. **パチスロ魔法少女リリカルなのは** — 三洋物産。
   - ALL7・パチビー: **2015-07-13**。
   - K-Navi・HAZUSE・複数後年解析: **2015-07-21**。
   - 導入日が競合しているため、当時メーカー/業界記事・納品予定/地域先行/全国一斉導入の定義を分離してからcanonical決定する。

監査メモ:
- ALL7の07/06「APPLESEED」は検索で再確認したところ **CR APPLESEED（パチンコ）** であり、本パチスロDB本線の漏れではない。
- K-Naviの全国一斉導入カレンダーでは07/13のパチスロ枠は鬼神7のみだが、ALL7/パチビーになのは07/13表記があるため07/13群はまだ閉じない。

## 次回再開地点

1. **recordCount 897 / chronologicalFrontier 2015-07-13 / 07-13_GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.897を再確認。
3. **パチスロ魔法少女リリカルなのは**の導入日競合（2015-07-13 vs 2015-07-21）を当時メーカー/業界記事まで横断し、納品日・先行導入・全国導入を分離する。
4. 07/13が実ホール導入として採用可能ならNo.898として同日群へ登録。07/21がcanonicalなら07/13群を全メーカー最終監査してCLOSED後、07/14〜07/20境界を監査して07/21へ進む。
5. 新規機種は性能コア + resetBehavior v0.7を同時収集。`UNVERIFIED_AFTER_RESEARCH` は検索語/資料系統変更後だけ使用。
6. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 設定変更・据え置き・純電断を自動で同義扱いしない。
- 同名/近似名・前作/後継機のresetBehaviorを流用しない。
- 競合資料は平均・恣意的統合せずCONFLICTとして保持。
- P-WORLDの最終更新日を導入日として採用しない。
- 検定告示 / 発表 / 納品予定 / 地域先行 / 全国実ホール導入を分離する。

## 主要出典 — 取得日 2026-09-07

### 鬼神7
- K-Navi 2015年7月導入カレンダー: https://p-kn.com/calendar/201507/
- P-WORLD: https://www.p-world.co.jp/machine/database/7750
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/aidenshi_slot/02/a.php
- パチマガスロマガ ボーナス確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/aidenshi_slot/02/h.php
- ちょんぼりすた: https://chonborista.com/slot/aidenshi/9658/
- pacnk: https://pacnk.com/slot/tools/sh_kishin7.html
- 中一商事: https://www.nakaiti.com/html/Aidenshi002.html
- グリーンべると: https://web-greenbelt.jp/00011148/
- 検定通過回顧: https://q-and-a.hatenablog.com/entry/2016/11/05/041555

### 次境界 / なのは導入日競合
- K-Navi 2015年7月導入カレンダー: https://p-kn.com/calendar/201507/
- ALL7 2015年7月導入予定: https://www.all7.jp/plans/index/2015/07
- パチビー: https://www.pachibee.jp/machines/index/215060003
- K-Navi なのは: https://p-kn.com/slot/2285/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0161/
