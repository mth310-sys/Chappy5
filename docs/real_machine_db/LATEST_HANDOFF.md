# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **797**
- latestMachineAddedByChronology: **ジャックポット**（ヤーマ / yama）
- latestRecord: `docs/real_machine_db/machines/2014-02-17_jackpot-yama.md`
- chronologicalFrontier: **2014-02-17**
- schema: **resetBehavior v0.7**
- status: **2014-02-17_GROUP_OPEN**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-02-17_queen-oasis.md` を再読。
- INDEXは旧集約状態（19件）のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は **recordCount 796 / chronologicalFrontier 2014-02-17 / 02-17群OPEN**。
- 前handoffの最優先候補 **ヤーマ「ジャックポット」**を797件目として追加。
- 2014年ヤーマ版を、2025年スマスロ「LBジャックポット」および岡崎産業の同名/近似ジャックポットシリーズと分離して調査した。
- 次の02-17候補 **「吉宗～極～」**（大都技研）はPachisevenに2014-02-17導入日がある一方、当時資料に大都直営店向け先行/別スペック文脈があるため、次回は全国ホール導入としての独立時系列採用可否を公式・業界・当時解析で精査する。
- 02-17群はまだOPEN。吉宗～極～の扱い決定後、全メーカー再監査してからCLOSED判定する。

## 今回追加 — ジャックポット（2014年・ヤーマ）

### identity / 性能コア

- manufacturer: **ヤーマ / yama**（販売協力ベルコ）。
- hall start: **2014-02-17**（HAZUSE / Pachiseven）。当時グリーンべるとは **2014-02-16納品予定** と報道しており、納品予定日と導入開始日を分離。
- 型式: **ジャックポットY6**。
- 検定番号: **3S0992**。
- generation/system: **5号機 / ノーマルAタイプ / 完全告知**。
- payout: **96.5 / 98.0 / 100.0 / 102.0 / 104.5 / 107.0%**。
- BIG: **1/287.0 / 277.0 / 273.0 / 268.0 / 260.0 / 252.0**。
- REG: **1/356.0 / 348.0 / 334.0 / 315.0 / 303.0 / 292.0**。
- 合算: **1/158.9 / 154.2 / 150.2 / 144.8 / 139.9 / 135.3**。ベルコ公式とHAZUSEで一致。
- basicPayout: **BIG平均312枚 / REG平均104枚**。業界・HAZUSE・P-WORLDで一致。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。本機名/型式/メーカー/シリーズ名と50枚・1000円・ベース・コイン持ち・回転数を組み替え、公式/当時記事/解析/回顧資料を再探索したが直接値を固定できず。2025年LB版の約40G/50枚は別機種として排除。
- recordStatus: **PARTIAL_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- ノーマルAタイプのためゲーム数天井、AT/ART/CZ通常モード、内部高確、リセット専用短縮天井は **NOT_APPLICABLE_NORMAL_TYPE**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- 設定変更専用の朝一当選/CZ/モード恩恵・不利は **NONE / NOT_APPLICABLE_NORMAL_TYPE**。
- 本機固有の設定変更時リール初動、初期出目、ガックン、7セグ表示等の変更判別は、機種名/型式名/ヤーマ/ベルコ/ジャックポットシリーズと設定変更・リセット・朝一・据え置き・ガックンを組み替えて再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ONで朝一価値を持つ天井・モード・状態は非搭載。その他の本機固有電断特殊挙動も **NONE_CONFIRMED_AFTER_RESEARCH**。
- ボーナス終了後33G以内に成立したBIGでBGMが変化する仕様は公開されているが、設定変更/電断をまたいだ条件を示す直接資料がないためリセット判別要素へ拡張しない。

## conflicts / safeguards

- **2014年ヤーマ版と2025年LBジャックポットを混同しない**。LB版のスマスロ/BT、4段階設定、約40G/50枚は本機へ転記しない。
- 岡崎産業の「スロット ジャックポット」「ジャックポットドリーム」等も別機種。
- 2014-02-16は当時業界記事の納品予定、2014-02-17はHAZUSE/Pachisevenの導入開始として定義を分離。
- HAZUSEのBIG/REG分母は整数掲載値。精密値を推定生成しない。

## 2014-02-17同日群 — OPEN

処理済み:
1. **クイーンオアシス**（パイオニア） — 796件目。
2. **ジャックポット**（ヤーマ） — 797件目。

未処理/要確認:
1. **吉宗～極～**（大都技研） — Pachisevenに2014-02-17導入日。ただし当時記事には大都直営店向け先行/別スペック文脈があるため、全国ホール導入開始の定義・独立収集対象としての扱いを複数資料で精査する。
2. 02-17をメーカー横断で再監査し、上記以外のパチスロ候補がないか確認してから群を閉じる。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線797件目を優先。既存性能coreStatusは変更なし。reset QAは性能完了判定とは別管理を維持。

## 次回再開地点

1. **recordCount 797 / chronologicalFrontier 2014-02-17 / 02-17群OPEN** から開始。
2. 最優先で **大都技研「吉宗～極～」**の2014-02-17導入定義を公式/業界/当時解析で精査。直営限定先行・少数先行・全国導入のどれかを確定し、独立レコード対象として妥当なら798件目候補として性能コア + v0.7 resetBehaviorを収集。
3. 02-17同日全メーカー監査を完了してからCLOSED判定。
4. HAZUSEカレンダー上の次アンカー **2014-02-18** を監査する。
5. **「サムライスピリッツ～剣豪八番勝負～」は2014-04-07候補**として保持し、2月には入れない。
6. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で継続。
7. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合は平均せずCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

### ジャックポット（2014年・ヤーマ）
- ベルコ公式 / ヤーマ ジャックポット: `https://www.s-bellco.co.jp/products/slot/yama_jackpot/`
- グリーンべると / P-WORLD業界ニュース「名機『ジャックポット』が復活」: `https://news.p-world.co.jp/articles/6202/greenbelt`
- HAZUSE ジャックポット: `https://hazuse.com/machine/pachislot/3S0992/`
- P-WORLD ジャックポット「2014年」: `https://www.p-world.co.jp/machine/database/7270`
- Pachiseven ジャックポット: `https://pachiseven.jp/machines/3256/cutout/70`
- 当時ホールスタッフ記事: `https://pachinko-slot.blog.jp/archives/3500518.html`
- 回顧資料: `https://www.marimo0925.net/pachislot-kikaiwari-ranking-jackpot-ban/`

### 次候補 / 境界
- Pachiseven 吉宗～極～: `https://pachiseven.jp/machines/4129/cutout/4`
- HAZUSE新台カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`
