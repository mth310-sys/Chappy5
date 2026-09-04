# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **586**
- latestMachineAdded: **蝶々乱舞**（オリンピア / releaseDate主値2011-06-10 / BACKFILL / 日付CONFLICT）
- latestRecord: `docs/real_machine_db/machines/2011-06-10_chouchou-ranbu.md`
- chronologicalFrontier: **2011-06-27**
- frontierLatestExactDateMachine: **大逆転**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、585件目「パチスロエイリヤンビギンズ」を再取得して開始。
- `INDEX.md` は旧情報（19件/2006年時点）のためREADME規約どおり最新 `LATEST_HANDOFF.md` とmachineレコードを進捗正本として使用。
- 開始時は **recordCount 585 / chronologicalFrontier 2011-06-27**。
- 直前HANDOFFの2011年6月漏れ監査を継続し、repo検索で **蝶々乱舞 / 鬼浜外伝 ハヤト疾風伝 / リオスパ Rioの大温泉** が未登録であることを再確認。
- 最古候補「蝶々乱舞」は HAZUSE 2011-06-10導入開始、K-Navi 2011-06-13ホール導入開始、当時グリーンべると 2011-06-19納品開始予定で日付差。平均せずCONFLICTとして保持し、586件目としてBACKFILL。
- 遡及追加のため chronologicalFrontier は **2011-06-27** のまま維持。

## 今回追加 — 586 蝶々乱舞

- メーカー: **オリンピア**。
- 型式/検定番号: **蝶々乱舞 / 1S0080**。
- 5号機 / **A+ART・周期CZ**。
- 機械割: **96.9 / 98.5 / 100.1 / 104.1 / 108.1 / 112.2%**。
- BIG: **1/434.0 / 1/422.8 / 1/412.2 / 1/385.5 / 1/362.1 / 1/341.3**。
- REG: **1/532.8 / 1/520.1 / 1/504.1 / 1/485.5 / 1/468.1 / 1/445.8**。
- ボーナス合算: **1/239.2 / 1/233.2 / 1/226.8 / 1/214.9 / 1/204.2 / 1/193.3**。
- ART初当たり: **1/372.7 / 1/336.0 / 1/332.1 / 1/277.8 / 1/255.1 / 1/167.1**。
- 50枚ベース: **全設定共通30.49G**（パチマガスロマガ直接値）。
- BIG約 **204枚**、REG約 **30枚**。
- ART「乱舞チャンス」: **約+1.5枚/G、1セット33〜333G**。
- 周期: **33G**。21周期目（661G以降）のREGで蝶々ゾーン、30周期目（957〜990G）は超高確、**990G+前兆5GでART確定**。

### resetBehavior v0.7 — 586

- `settingChangeBehavior`: **PARTIAL_CONFIRMED**。解析DBで「設定変更後も周期G数はクリアされず、ボーナス後の状態からスタート」を回収。K-Naviにも本機専用「設定変更後の挙動」「モード移行率(設定変更時)」項目の存在を確認。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の周期G数/内部モード/引き戻し状態を本機固有の直接記述で確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の周期/モード処理を確定できず。
- `gameCounterReset`: **RETAIN_ON_SETTING_CHANGE_CONFIRMED_BY_ANALYSIS_SOURCE**。設定変更でも周期G数非クリア。
- `ceilingAfterReset`: **NO_SHORTENING_CONFIRMED; COUNTER_RETAINED**。
- `modeAfterReset`: **PARTIAL**。設定変更時専用モード移行解析項目は存在。具体的な設定別振り分け本文は今回取得不能のためUNVERIFIED。
- `stateAfterReset`: **BONUS-END_EQUIVALENT_START_REPORTED; DETAILS_UNVERIFIED**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits`: **BONUS-END_EQUIVALENT_START_REPORTED; SEPARATE_NUMERIC_BENEFIT_NONE_CONFIRMED**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。周期進捗消失は回収資料上否定。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/ランプ/7セグによる変更判別を直接確定できず。
- 公開朝一数値: 設定変更専用モード振り分け等の**具体値はUNVERIFIED_AFTER_RESEARCH**。

## releaseDate CONFLICT — 586

- HAZUSE: **2011-06-10 導入開始**。
- K-Navi: **2011-06-13 ホール導入開始**。
- グリーンべると（2011-05-12記事）: **2011-06-19 納品開始予定**。
- 日付定義が異なるため平均化しない。BACKFILL時系列キーはHAZUSEの「導入開始」2011-06-10を採用し、他値をCONFLICTとして保存。

## 主要出典 — 586（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1427/`
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0080/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6357`
- グリーンべると: `https://web-greenbelt.jp/00002092/`
- パチマガスロマガ小役確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/97/c.php`
- pacnk設定判別DB: `https://pacnk.com/slot/tools/sh_chouchouranbu.html`
- 当時スペック転載: `https://plaza.rakuten.co.jp/x3esibm1/`

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- QA済み範囲は推測で動かさず、怪胴王直後の実machine pathをtree順に確認し、最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 586 / chronologicalFrontier 2011-06-27**。最新main README / mission / INDEX / LATEST_HANDOFF / 585・586レコードを再取得。
2. **2011年6月漏れBACKFILLを継続**。次の最優先は **鬼浜外伝 ハヤト疾風伝**。HAZUSEは **2011-06-17導入開始**、当時グリーンべるとは **2011-06-19納品開始**。日付定義を分離し、repo未登録を再確認してから587件目候補として処理する。
3. その次に **リオスパ Rioの大温泉**。当時グリーンべるとは **2011-06-19納品開始予定**。K-Navi/P-WORLD/HAZUSE等で実導入日を再照合し、鬼浜外伝との順序を確定する。
4. **パチスロ 笑ゥせぇるすまん（三洋物産）**は2011年6月導入までは確認済みだが具体日未確定。検索語・資料系統を変えて6/27以前/同日か継続確認する。
5. 6月漏れと6/27同日群を閉じた後に **6/28以降**へ前進。PARTIAL/UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで十分再探索した後だけ残す。
