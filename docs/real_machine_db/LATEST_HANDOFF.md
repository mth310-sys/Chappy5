# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **447**
- latestMachineAdded: **鴉-KARAS-**
- latestRecord: `docs/real_machine_db/machines/2010-02-08_karas.md`
- chronologicalFrontier: **2010-02-08**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**
- note: 2010-01-26〜01-31および2010-02-01〜02-07境界を再監査し、次の高信頼具体日機として2010-02-08「鴉-KARAS-」を追加。2/8同日群を閉じてから先へ進む。

## 今回の継続確認

- GitHub最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、既存レコードを再読。
- `INDEX.md` は旧地点のためREADME規定どおり進捗正本には使わず、LATEST_HANDOFF＋実レコードを優先。
- 開始時mainは446件 / chronologicalFrontier 2010-01-25 / latestMachineAdded シオサー-30。
- 2010-01-26〜01-31および2010-02-01〜02-07を、日付・機種名・メーカー・当時新台記事を変えて再監査。今回、これらの日付に新たに具体日確定できる未登録機は追加しなかった。
- `シオサー-30` の2010-02-01導入予定情報は既存446内のreleaseDate conflictとして保持し、再追加しない。
- 次の高信頼具体日として、グリーンべると「2010-02-07納品予定」、パチビー「2010-02-08導入」、P-WORLD「2010年02月」が整合する `鴉-KARAS-` を447件目として追加。
- GitHubコード検索indexは遅延しうるため、`鴉-KARAS` / `カラスZ` のrepo検索だけでなく、LATEST_HANDOFF未処理候補と実レコード前線も併用して重複を回避。

## 447 — 鴉-KARAS- 要約

- メーカー: **アビリット**（現行P-WORLD表記はコナミアミューズメント）
- 型式名: **カラスZ**
- 検定番号: **9S1115**
- 導入: **2010-02-08**
- 世代: **5号機**
- システム: **ボーナス+RT / 技術介入 / 天井チャンスゾーン**
- 機械割: **97.5 / 99.0 / 101.0 / 102.5 / 104.0 / 106.0%**
- BIG合算: **1/218.5 / 1/213.5 / 1/210.1 / 1/202.3 / 1/198.6 / 1/193.3**
- BG: **全設定1/2340.6**
- 全ボーナス合算: **1/199.8 / 1/195.6 / 1/192.8 / 1/186.2 / 1/183.1 / 1/178.6**
- ハイパーBIG: **最大383枚**
- BIG: **約167〜203枚**
- BG: **約96枚**
- 超廻向TIME: **約+0.5枚/G・次回ボーナスまで**
- 廻向TIME: **85G・現状維持程度**
- 通常天井: **ボーナス間777G → ボーナス成立まで内部チャンスゾーン、同状態中のBIGは全てスーパーBIG**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**

## resetBehavior v0.7 — 鴉-KARAS-

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`
- **gameCounterReset**: `UNVERIFIED_AFTER_RESEARCH`。777G天井の存在は確定しているが、変更時クリア/引継ぎを直接確定できず。
- **ceilingAfterReset**: `NO_RESET_SPECIFIC_SHORTENING_CONFIRMED`。通常777Gのみ確認、変更専用短縮値なし。
- **modeAfterReset**: `NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED`
- **stateAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。RT中/777G後CZ中の変更処理を直接確定できず。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）
- **朝一恩恵**: `NONE_CONFIRMED_AFTER_RESEARCH`
- **朝一不利**: `NONE_CONFIRMED_AFTER_RESEARCH`
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/リール/ランプまで検索を拡張したが、本機固有高信頼資料を確定できず。
- **公開朝一数値**: 設定変更専用モード振分/当選率/恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 主要CONFLICT / 欠損

- releaseDate: 当時グリーンべると「2/7から納品予定」+パチビー「2/8導入」+P-WORLD「2010年2月」が整合。一方K-Navi現行ページは2010-12-12とし、性能値は同一系列なので日付のみ `CONFLICT_SOURCE_DATE_LIKELY_METADATA_ERROR` として分離。
- manufacturer: 導入当時はアビリット。P-WORLD現行DBは事業継承後のコナミアミューズメント表記。主値は当時メーカー。
- baseGamesPer50: 表記揺れ/型式/メーカー/50枚/1000円/コイン持ち/ベースで再探索したが比較可能な直接値なし。
- settingChange / carryOver / powerCycle / gameCounterReset / active RT-or-CZ state after change / resetDetection: 十分な再探索後も直接根拠なし。

## 主要出典（取得日 2026-09-03）

- グリーンべると: `https://web-greenbelt.jp/00003383/`
- パチビー: `https://www.pachibee.jp/machines/index/209120002`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5781`
- K-Navi: `https://p-kn.com/slot/1113/`
- スロカレ/タイアップ機一覧: `https://sulocale.sulopachinews.com/archives/23596`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 本線新規収集を止めず、QAリレー時にその直後の最初のresetBehavior欠損実ファイルから補完する。

## 次回再開地点

1. **recordCount 447 / chronologicalFrontier 2010-02-08**。まず2010-02-08同日群を閉じる。
2. 同日具体日を既に確認できている **`パチスロスーパー海物語`（三洋物産、K-Navi 2010-02-08）** を最優先候補として、repo既存有無→性能コア→resetBehaviorを多系統照合する。
3. **`アフロのモンチ`** はグリーンべるとで2010-02-07納品予定を確認済み。具体ホール導入日を別ソースで確定し、2/8同日ならスーパー海物語と同日群として処理する。
4. `鴉-KARAS-` は今回登録済みなので再追加しない。
5. 2010年2月月内候補: `ビューティフルジョー`、`ピカ吾郎V2`、`バイオレントゾーン`、`BLOOD+`、`ゼットゴールドEX`、`列強伝`、`新世紀エヴァンゲリオン～魂の軌跡～`、`ハイハイ30`、`みどりのマキバオー`、`真田純勇士`、`哲也 新宿vs上野DX`。具体日を当時資料で確定し、最古から追加する。
6. 現時点で後続具体日は `BLOOD+` 2010-02-15、`ゼットゴールドEX` 2010-02-21、`みどりのマキバオー` 2010-02-22を確認済み。ただしそれ以前の未処理機を飛ばさない。
7. `シオサー-30` は446で登録済み。2/1予定日は既存CONFLICTとして保持し再追加しない。
8. 追加前に必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 実レコード前線を再取得し、repo既存検索も併用して重複・他リレー競合を防ぐ。
