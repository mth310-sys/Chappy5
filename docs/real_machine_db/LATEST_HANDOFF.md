# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **577**
- latestMachineAdded: **レッツドラゴーン**（SANKO / 2011-06リリース、具体導入日UNVERIFIED）
- latestRecord: `docs/real_machine_db/machines/2011-06_lets-dragoon.md`
- chronologicalFrontier: **2011-06-06**
- frontierLatestExactDateMachine: **スターマン バイキング**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、576前線レコード「スターマン バイキング」を再取得して開始。
- `INDEX.md` は19件地点の旧情報のため、README規約どおり最新 `LATEST_HANDOFF.md` とmachineレコードを進捗正本として使用。
- handoff指定の2011-06-06同日群残存監査を継続し、repo検索でSANKO「レッツドラゴーン」が未登録であることを再確認して577件目として追加。
- 「レッツドラゴーン」は複数資料で **2011年6月** リリース/導入開始を確認できるが、2011-06-06を直接示す資料は十分な再探索後も未回収。日付を推測固定せず月単位レコードとし、chronologicalFrontierは既確定の2011-06-06を維持。

## 今回追加 — 577 レッツドラゴーン

- メーカー: **SANKO**
- 型式名: **レッツドラゴーン**
- 検定番号: **0S0263**
- 導入/リリース: **2011-06（具体日UNVERIFIED_AFTER_RESEARCH）**
- 5号機 / **ノーマルAタイプ + 3GプチRT**
- PAYOUT: **97.7 / 99.9 / 101.9 / 104.1 / 105.9 / 109.1%**
- パチマガスロマガ: **98 / 100 / 102 / 104 / 106 / 109%** → 丸め範囲で整合
- BIG: **1/297.9 / 1/287.4 / 1/280.1 / 1/270.8 / 1/262.1 / 1/252.1**
- REG: **1/318.1 / 1/303.4 / 1/287.4 / 1/275.4 / 1/264.3 / 1/252.1**
- 合算: **1/153.8 / 1/147.6 / 1/141.9 / 1/136.5 / 1/131.6 / 1/126.0**
- 獲得枚数: **BIG約300枚 / REG約96枚**
- 特殊リプレイ後: **3GプチRT「ドラゴンチャンス」**
- 固定ゲーム数天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- BIG規定払い出し表記: P-WORLD **336枚超** / パチマガ **326枚** → 表記差を保持

### resetBehavior v0.7 — 577

- ボーナスのみで出玉を増やすノーマルタイプ。3種類の「演出モード」はプレイヤー選択式の表示演出で、内部モードとして扱わない。
- 固定ゲーム数天井・長期ゲーム数モード・AT/ART/CZは確認されず、`gameCounterReset` / `ceilingAfterReset` は **NOT_APPLICABLE_NO_FIXED_GAME_COUNT_CEILING_CONFIRMED**。
- 設定変更時の固有挙動、据え置き、単純電源OFF→ON、3GプチRT中や演出モード選択状態の変更/電断処理、ガックン/7セグ/宝玉LED等による変更判別は、表記揺れ・型式・検定番号を含め検索語と資料系統を変えて再探索したが直接本文を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井、朝一高確、変更時専用当選率、特定G数優遇などは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間は **NOT_APPLICABLE**。

## 主要出典 — 577（取得日 2026-09-04）

- P-WORLD: `https://www.p-world.co.jp/machine/database/6314`
  - SANKO、5号機ノーマル/プチRT、全設定BIG/REG/合算、PAYOUT、BIG300枚/REG96枚、3GプチRT、型式名、検定番号0S0263、導入開始2011年06月
- パチマガスロマガ確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanko_slot/01/h.php`
  - BIG/REG/合算、PAYOUT98〜109%
- パチマガスロマガ基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanko_slot/01/a.php`
  - ノーマル、3演出モード、BIG約300枚/REG約96枚
- pachinko’s blog: `https://pachinko.hatenablog.jp/entry/2011/06/lets-Dragoon`
  - 型式名、2011年6月リリース、ノーマルタイプ
- SANKO検定通過型式整理: `https://q-and-a.hatenablog.com/entry/2016/10/27/005647`
  - 2011-02-28検定通過記録

## 今回のGitHub更新

- 577: `docs/real_machine_db/machines/2011-06_lets-dragoon.md`
  - create commit: `c060e1ebf30cad83f2d8294f81703f8b255f9efd`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- QA済み範囲は推測で動かさない。怪胴王直後の最初の実在resetBehavior欠損machine pathを直接確定してから再開する。

## 次回再開地点

1. **recordCount 577 / chronologicalFrontier 2011-06-06**。最新main README / mission / INDEX / LATEST_HANDOFF / 576・577レコードを再取得。
2. **2011-06-07〜06-19を時系列監査**。レッツドラゴーンの具体導入日を確定できる新たな当時資料が見つかれば月単位レコードを修正するが、推測で06-06固定しない。
3. 既知アンカー **プロゴルファー猿**は2011-06-20（必勝本）/ 2011-06-27（K-Navi）の日付競合候補。途中未登録機を先に洗い出し、最古の確定未処理機から578件目へ進む。
4. 続く候補として **ハネスロ林家一家 2011-06-26納品開始予定**、**スカイラブ3 2011-06-27ホール導入**を保持。日付定義を分離し、途中機種を飛ばさない。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・reset検索語を変え、公式/業界/当時解析/旧DB/アーカイブ/回顧資料を横断した後だけ残す。CONFLICTは平均しない。
