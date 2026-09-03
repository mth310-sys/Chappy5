# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **449**
- latestMachineAdded: **アフロのモンチ**
- latestRecord: `docs/real_machine_db/machines/2010-02-07_afro-no-monchi.md`
- chronologicalFrontier: **2010-02-08**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**
- note: 448件地点から2/7〜2/8境界群を継続し、SNKプレイモア「アフロのモンチ」を遡及449件目として追加。具体導入日は同時代業界記事＋HAZUSEで2010-02-07を採用。chronologicalFrontierは既到達の2010-02-08を維持する。

## 今回の継続確認

- GitHub最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、既存前線レコード `2010-02-08_pachislot-super-umi-monogatari.md` を再読。
- `INDEX.md` は旧19件地点のため、README規定どおり進捗正本には使わずLATEST_HANDOFF＋実レコードを優先。
- 開始時mainは448件 / chronologicalFrontier 2010-02-08 / latestMachineAdded パチスロスーパー海物語。
- LATEST_HANDOFF最優先候補 `アフロのモンチ` をrepo検索し、既存レコードなしを確認してから調査・追加。
- 書き込み直前にもLATEST_HANDOFFと直近コミットを再取得し、448件地点から更新が競合していないことを確認。

## 449 — アフロのモンチ 要約

- メーカー: **SNKプレイモア**
- 導入: **2010-02-07**
  - 当時グリーンべると: 納品2/7開始
  - HAZUSE DATA: 導入開始日2/7
  - P-WORLD/pacnk/5号機クロニクル: 2010年2月
  - K-Naviだけ2009-02-08で1年ずれ → `LIKELY_METADATA_ERROR`
- 型式: **アフロノモンチS / アフロのモンチS**（表記差）
- 検定番号: **9S1003**
- 世代: **5号機**
- システム: **ノーマル / ボーナス主体 / 技術介入 / 5GプチRT演出**
- BIG: **1/289.9 / 1/280.0 / 1/270.8 / 1/260.0 / 1/248.2 / 1/239.1**
- REG: **1/474.9 / 1/455.1 / 1/425.5 / 1/390.1 / 1/348.6 / 1/289.9**
- 合算: **1/180.0 / 1/173.3 / 1/165.4 / 1/156.0 / 1/144.9 / 1/131.0**
- 機械割: **95.1 / 96.7 / 100.0 / 104.2 / 107.7 / 112.5%**（複数系統一致）
- 50枚ベース: **35.01 / 35.12 / 35.24 / 36.15 / 36.77 / 37.08G**（旧パチマガ1000円あたり直接値）
- BIG: **MAX311枚**
- REG: **CONFLICT — MAX116枚（当時業界/P-WORLD） vs MAX104枚（旧パチマガ）**
- プチRT: **5G**。特定15枚役成立後に移行し、出玉主軸ではなく演出用。
- 通常ゲーム数天井: **NO_CEILING_CONFIRMED_AFTER_RESEARCH**

## resetBehavior v0.7 — アフロのモンチ

- **設定変更**: `NO_PUBLISHED_SPECIAL_RESET_BEHAVIOR_CONFIRMED_AFTER_RESEARCH`。短縮天井・朝一高確・当選優遇等の本機固有公開情報を確認できず。
- **据え置き**: `NO_PERSISTENT_GAME_COUNT_OR_MODE_RESOURCE_CONFIRMED`。通常ゲーム数天井/ゲーム数モード/ARTストック/周期CZ等を確認しない。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。成立済み5GプチRTを継続/消去するかは直接確定できず。
- **gameCounterReset**: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED`。
- **ceilingAfterReset**: `NOT_APPLICABLE_NO_CEILING_CONFIRMED`。
- **modeAfterReset**: `NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED`。3種類のプチRTステージは短時間演出状態として通常モードと区別。
- **stateAfterReset**: `UNVERIFIED_AFTER_RESEARCH_TRANSIENT_MINI_RT`。設定変更/電源断時の5GプチRT状態処理は未確定。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）
- **朝一恩恵**: `NONE_CONFIRMED_AFTER_RESEARCH`
- **朝一不利**: `NONE_CONFIRMED_AFTER_RESEARCH`
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/朝一出目/変更判別/据え置きまで検索語を拡張したが本機固有高信頼資料を確定できず。
- **公開朝一数値**: 設定変更専用モード振分/短縮天井/朝一当選率/恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 主要CONFLICT / 欠損

- releaseDate: 同時代業界記事＋HAZUSEの2010-02-07に対し、K-Naviのみ2009-02-08。発表記事自体が2010-01-15なのでK-Naviは `LIKELY_METADATA_ERROR` として分離。
- formalModelName: `アフロノモンチS` / `アフロのモンチS` の表記差。
- REG max payout: `MAX116枚` vs `MAX104枚`。規定払い出し119枚表記は整合するが実獲得MAX定義を解消できずCONFLICT。
- settingChange/powerCycle時の5GプチRT状態処理: `UNVERIFIED_AFTER_RESEARCH`。
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`。

## 主要出典（取得日 2026-09-03）

- グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/3757/greenbelt`
- HAZUSE DATA: `https://data.hazuse.com/?genre=208&machine_code=9S1003`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5829`
- K-Navi: `https://p-kn.com/slot/1136/`
- pacnk: `https://pacnk.com/slot/2010/afronomonchi/top.php`
- 5号機クロニクル: `https://5goki.com/snkplaymore`
- パチマガスロマガ基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/28/a.php`
- パチマガスロマガ1000円ゲーム数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/28/c.php`
- パチマガスロマガ機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/28/snk_slot_28.php`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 本線新規収集を止めず、QAリレー時にその直後の最初のresetBehavior欠損実ファイルから補完する。

## 次回再開地点

1. **recordCount 449 / chronologicalFrontier 2010-02-08**。
2. `アフロのモンチ` 追加により2/7境界漏れを解消。次は **2010-02-08同日群を最終監査**し、残件がなければ2/09〜2/14境界へ進む。
3. 2/09〜2/14は日付検索・当時業界発表・月次DBを突合し、発表日と納品/導入日を混同しない。2/9の『続・お見事！サブちゃん』『ノーマルだよ！サブちゃん』記事は「発表」で、記事本文は後続納品予定を別途確認してから収録順を決める。
4. 後続具体日確認済み候補: **`BLOOD+` 2010-02-15**、`ゼットゴールドEX` 2010-02-21、`みどりのマキバオー` 2010-02-22。ただし2/8〜14の未処理を飛ばさない。
5. 2010年2月月内候補: `ビューティフルジョー`、`ピカ吾郎V2`、`バイオレントゾーン`、`列強伝`、`新世紀エヴァンゲリオン～魂の軌跡～`、`ハイハイ30`、`真田純勇士`、`哲也 新宿vs上野DX`。具体日を当時資料で確定し、最古から追加する。
6. 追加前に必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 実レコード前線を再取得し、repo既存検索も併用して重複・他リレー競合を防ぐ。
