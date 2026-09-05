# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **684**
- latestMachineAdded: **パチスロ聖闘士星矢**（三洋物産）
- latestRecord: `docs/real_machine_db/machines/2012-09-10_pachislot-saint-seiya.md`
- chronologicalFrontier: **2012-09-10**
- frontierLatestExactDateMachine: **パチスロ聖闘士星矢**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-09-10_GROUP__NEXT_REACH_RUSH**

## 今回の同期・時系列監査

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、最新レコードを確認して開始。
- INDEXは初期19件時点の古い集計だが、README規則どおりより新しい `LATEST_HANDOFF.md` を進捗正本として採用。
- 開始時正本は recordCount 683 / chronologicalFrontier 2012-09-03 / 09-03パチスロ群CLOSED。
- 2012-09-04〜09-09境界を監査。ALL7.jp 9月導入予定一覧上、次の具体日付きパチスロは2012-09-10の「パチスロ聖闘士星矢」「リーチラッシュ」。
- repo検索で「パチスロ聖闘士星矢」は未登録を確認し、684件目として追加。
- repo検索で「リーチラッシュ」も未登録を確認。09-10同日群は未閉鎖。

## 今回の本線追加 — パチスロ聖闘士星矢

### 識別

- manufacturer: **三洋物産**
- releaseDate key: **2012-09-10**
- generation: **5号機**
- systemType: **AT / 規定ゲーム数解除 + CZ / セット継続**
- modelName / approvalNumber: 今回の再探索では直接確定できず `UNVERIFIED_AFTER_RESEARCH`

### 性能コア

- 機械割: **96.7 / 98.0 / 100.0 / 103.1 / 106.1 / 110.0%**
- AT初当たり: **1/272.1 / 267.7 / 264.1 / 229.3 / 208.5 / 177.3**
- CZ「火時計ミッション」: **1/186.1 / 178.0 / 178.2 / 161.3 / 144.6 / 124.1**
- 50枚ベース: **約30G**（後年単一整理資料のためANALYSIS_SINGLE_RETROSPECTIVE）
- AT「聖闘士RUSH」: **約+2.8枚/G**
- K-Navi表記は **30/50/100G + バトル10G+α**。2012年業界記事の **40/60/110G** はバトル込み総ゲーム数と判断できるため定義差として保持。
- 通常モード別天井: **A 1400G / B 1000G / C 700G / 天国100G / 超天国100G**。

### resetBehavior v0.7

- `settingChangeBehavior`: **GAME_COUNT_CLEARED_CONFIRMED**。本機名明示の当時系資料で設定変更時に天井到達までのゲーム数をクリアすると確認。
- `gameCounterReset`: **RESET_ON_SETTING_CHANGE_CONFIRMED**。前日ハマリの天井進捗は設定変更で失う。
- `ceilingAfterReset`: 設定変更専用の短縮天井は **NONE_CONFIRMED**。通常のモード別天井と混同しない。
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。設定変更直後のA/B/C/天国/超天国振り分け率は確定できず。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。高確/超高確の変更時振り分けを確定できず。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の天井・モード・状態保持を本機固有直接資料で確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの挙動は直接根拠未確定。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: 確定的な短縮天井等はなし。K-Navi当時実戦では新台初日12台で朝一100G以内の前兆「聖域への道」が複数台に発生したがATに繋がったのは1台で、解析値ではないため恩恵数値に採用しない。
- `resetPenalties`: **PREVIOUS_DAY_CEILING_PROGRESS_LOST**。
- `resetDetection`: 朝一100G以内前兆は当時実戦者が変更推測材料にした程度で確定判別ではない。ガックン等は `UNVERIFIED_AFTER_RESEARCH`。
- `publicMorningNumbers`: **NONE_CONFIRMED_AS_ANALYSIS_VALUE**。

## 遡及resetBehavior QA 進捗

- 前handoffから継続するQA再開地点は変更しない。
- 遡及QA次回再開地点: **`docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`**。
- 本線の時系列収集を止めず、QAは別リレーで既存レコードのresetBehavior欠損だけ補完する。

## 次回再開地点

1. **recordCount 684 / chronologicalFrontier 2012-09-10 / 09-10同日群OPEN**から開始。
2. 最優先はベルコ **「リーチラッシュ」**。ALL7.jpで2012-09-10導入予定、repo未登録を確認済み。
3. リーチラッシュ処理後、09-10同日群の漏れを再監査して閉鎖する。
4. 次の既知具体日アンカーは **2012-09-18「パチスロ リングにかけろ1 ギリシア十二神編」**（サミー）。09-11〜09-17境界を監査してから進む。
5. 9月後半候補として「キュインぱちすろ南国育ち 1st vacation」「戦人」「覇王伝 零」「トロピカーナ」「マハロ-30」「ニューワンバー-30」を保持し、必ず具体日を照合して古い順に挿入する。
6. 「兎－野生の闘牌－」は2012-08-06に既登録済みのため9月候補一覧に現れても重複追加しない。
7. PARTIAL/UNVERIFIED/reset欠損は表記揺れ・型式名・メーカー・シリーズ名と検索語を変え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後に判定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

- K-Navi パチスロ聖闘士星矢: `https://p-kn.com/slot/1692/`
- ALL7.jp 2012年9月導入予定一覧: `https://www.all7.jp/plans/index/2012/09`
- 娯楽産業 三洋物産 新機種発表: `https://www.goraku-sangyo.com/%E4%B8%89%E6%B4%8B%E7%89%A9%E7%94%A3%E3%80%80%E3%83%91%E3%83%81%E3%83%B3%E3%82%B3%E3%83%BB%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD2%E6%A9%9F%E7%A8%AE%E5%90%8C%E6%99%82%E7%99%BA%E8%A1%A8/`
- D'STATION安中店 当時新台紹介: `https://ameblo.jp/d-annaka/entry-11438867168.html`
- みんスロ 聖闘士星矢: `https://minslo.com/%E8%81%96%E9%97%98%E5%A3%AB%E6%98%9F%E7%9F%A2/`

## GitHub commits

- パチスロ聖闘士星矢 machine record: `9bef3d2432cc50fb27a3f324b7cf0786530b027e`
