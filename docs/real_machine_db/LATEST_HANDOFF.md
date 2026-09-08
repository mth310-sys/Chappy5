更新日: 2026-09-08

## 現在地点
- recordCount: **996**
- latestRecordAdded: **バーサス**（アクロス）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-07-25_versus.md`
- chronologicalFrontier: **2016-07-25**
- frontierLatestMachine: **バーサス**（アクロス）
- schema: **resetBehavior v0.7**
- status: **2016-07-25_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.993 `2016-07-04_a-slot-nisemonogatari.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点の正本は recordCount **993** / chronologicalFrontier **2016-07-04** / `2016-07-04_GROUP_OPEN`。
- 既存性能値はやり直さず、07/04群の残件・境界監査から前進。

## No.994 — ファンキージャグラー
- manufacturer: **北電子**
- releaseDate canonical: **2016-07-11**
- formalModelName: **ファンキージャグラー／KK**
- certificationNumber: **5S1422**
- generation/system: **5号機 / ノーマル / 完全告知 / BIG+REG**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.0 / 98.2 / 99.8 / 102.0 / 104.3 / 109.0%**。
- BIG: **1/275.4 / 271.9 / 267.5 / 260.1 / 253.0 / 232.4**。
- REG: **1/452.0 / 407.1 / 372.4 / 336.1 / 302.0 / 275.4**。
- 合算: **1/171.1 / 163.0 / 155.7 / 146.6 / 137.7 / 126.0**。
- ベース: 代表約**35G/50枚**。設定別解析値35.0〜35.9G。
- BIG約**312枚** / REG約**104枚**。天井非搭載。

### resetBehavior v0.7
- 天井/ゲーム数モード非搭載のためリセット天井・モードはNOT_APPLICABLE。
- 朝一1G目の微小な**ガックン**を設定変更推測に使える本機固有の実機比較/解析を確認。ただし店側1G回し・リール物理操作で判別が崩れるため、ガックンなし＝据え置き確定とはしない。
- 純電源OFF→ONのみのガックン契約は直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は5.9号機以前で非該当。

### date conflict
- K-Navi/一部解析は **2016-07-04**。
- HAZUSE/パチセブンは **2016-07-11**、当時グリーンべるとは7/10納品開始予定かつ7/11より導入開始と報道。
- 平均せず `CONFLICT_RELEASE_DATE_0704_VS_0711`。実導入canonicalは **2016-07-11**。

## No.995 — 真田純勇士～ラブストライク～
- manufacturer: **EXCITE（ニューギングループ）**
- releaseDate canonical: **2016-07-04**
- formalModelName: **真田純勇士～ラブストライク～X**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / A+ART / 周期抽選 / CZ搭載**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_RESEARCH_EXHAUSTED**

### performanceCore
- 機械割: **97.8 / 99.0 / 100.7 / 103.6 / 107.2 / 111.0%**。
- BIG: **1/399.6 / 394.8 / 376.6 / 360.1 / 337.8 / 318.1**。
- REG: **1/799.2 / 780.2 / 762.0 / 712.3 / 697.2 / 697.2**。
- ART初当たり: **1/392 / 388 / 360 / 341 / 304 / 288**。
- CZ: **1/856 / 847 / 744 / 688 / 607 / 554**。
- 約**34G/50枚**、ART純増約**1.3枚/G**、BIG約**180枚**、REG**40枚**。
- 通常天井: ボーナス/ART間 **25周期（約850G）**でART当選。

### resetBehavior v0.7
- 当時解析自身が設定変更詳細を **「周期関係 調査中 / 状態移行 調査中」** と記載。
- 同記事の「おそらく天井関連は全てリセット」は推測表現なので採用せず、設定変更/据え置き/純電断の周期・天井・状態契約を **UNVERIFIED_AFTER_RESEARCH** とした。
- 朝一専用モード、短縮天井、ガックン、設定変更固有数値は十分再探索後も確定情報なし。
- 有利区間は5.9号機以前で非該当。

### date conflict
- 複数解析/導入予定資料は **2016-07-04**。
- 2016-06-22グリーンべるとは **7/10納品予定**。
- `CONFLICT_RELEASE_DATE_0704_VS_DELIVERY_0710` として保持。時系列キューcanonicalは7/4。

## 2016-07-04群 — CLOSED_FOR_CURRENT_RESEARCH
- 導入日順の独立資料で07/04群は **A-SLOT北斗の拳 将 / A-SLOT 偽物語 / 真田純勇士～ラブストライク～** の3機を確認。
- 一部年間カレンダーはファンキージャグラーも7/4へ置くが、当時業界記事/HAZUSEの実導入側を優先しNo.994は7/11 canonicalへ分離。
- 境界監査で真田が未登録だったためNo.995として補完し、07/04群の漏れを閉じた。

## 2016-07-11群 — CLOSED_FOR_CURRENT_RESEARCH
- **ファンキージャグラー**をNo.994登録済み。
- 7/11導入は当時グリーンべると、HAZUSE、パチセブンで一致。
- 7/12〜7/24は複数導入日一覧を横断し、次に明確な全国導入機は7/25のバーサスと確認。

## No.996 — バーサス
- manufacturer: **アクロス**
- releaseDate: **2016-07-25**
- formalModelName: **バーサスSE**
- certificationNumber: **6S0371**
- generation/system: **5号機 / A PROJECT / ノーマル・A+RT / 技術介入 / 4段階設定（1・2・5・6）**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 市場/メーカー公表系機械割: **98.2 / 100.2 / 103.4 / 106.4%**。
- 完全攻略時: **100.5 / 103.0 / 105.5 / 108.5%**。条件差なので別系列。
- BIG: **1/297.9 / 290.0 / 282.5 / 268.6**。
- REG: **1/409.6 / 381.0 / 356.2 / 334.4**。
- 合算: **1/172.5 / 164.7 / 157.5 / 148.9**。
- ベース: **32.7〜34.5G/50枚**。
- BIG最大**311枚** / REG**104枚**。
- BIG後RT: VS-CHANCE最大20G 約**0.3枚/G** → VS-GAME20G 約**0.5枚/G**。天井非搭載。

### resetBehavior v0.7
- 天井/通常ゲーム数モード非搭載のため、それらの設定変更・据え置き契約はNOT_APPLICABLE。
- RT中の設定変更/据え置き/純電断時の残G・内部RT契約は、本機固有の直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有の確定的ガックン/初期出目等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- BIG中V揃い・RT中ハズレは設定推測要素であり、朝一変更判別とは分離。
- 有利区間は5.9号機以前で非該当。

### conflict
- けんのスロットシミュレーションは主要複数資料と異なるBIG/REG系列および設定2出玉率102.00%を掲載。平均せず `CONFLICT_KENSLO_BONUS_SERIES` / `CONFLICT_KENSLO_SETTING2_PAYOUT` として保持し、HAZUSE/一撃/複数一致値をcanonical。

## 2016-07-25群 — CLOSED_FOR_CURRENT_RESEARCH
- 導入日順資料、HAZUSE、K-Navi、一撃で7/25の全国導入機として **バーサス**を確認。
- 7月の主要導入日一覧でも7/25群はバーサスのみ。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-06_be-bop.md**
- retroQaNextInspection: **2006-03-27_kengou-musashi.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は前進キューの07/04漏れ補完と07/25までの収集を優先し、retro QA再開地点は変更していない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.996を再取得。
2. **996件 → 2016-07-26〜08-01境界監査**。
3. 独立導入日一覧では次候補として **2016-08-01: セブンスビート / デビルメイクライX（クロス） / ルパン三世 消されたルパン** が挙がる一方、別カレンダーに8/11表記があるため、各機種をメーカー/業界当時資料で日付照合してから登録する。
4. 08/01群の日付を固定後、未処理機を順番に性能コア＋resetBehavior v0.7で収集する。
5. 遡及QAは `2006-03-27_kengou-musashi.md` から継続。
6. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/RT/ガックン等へ検索語と資料系統を変えて十分再探索後のみ確定。
7. 競合は平均せずCONFLICT。性能側COMPLETE_CORE/PARTIALとreset QA状態を混同しない。

## 主要出典 — 取得日 2026-09-08
### No.994 ファンキージャグラー
- グリーンべると/P-WORLD 2016-05-23: https://news.p-world.co.jp/articles/8390/greenbelt
- グリーンべると 2016-07-11: https://web-greenbelt.jp/00008789/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1422/
- HAZUSE設定推測: https://hazuse.com/machine/pachislot/5S1422/genre/208/
- P-WORLD: https://www.p-world.co.jp/machine/database/8053
- K-Navi: https://p-kn.com/slot/2518/
- ちょんぼりすた: https://chonborista.com/slot/kitadenshi/9698/comment-page-4/
- ジャグラー解析攻略: https://juggler7.com/funky/
- スロパチクエスト: https://www.slopachi-quest.com/article/funkyjuggler-settei/
- パチセブン: https://pachiseven.jp/machines/4856/cutout/2

### No.995 真田純勇士～ラブストライク～
- P-WORLD: https://www.p-world.co.jp/machine/database/8055
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/8470/greenbelt
- グリーンべると: https://web-greenbelt.jp/00008752/
- P-Summa: https://psumma.jp/pachislo/23167/
- Pacnk: https://pacnk.com/slot/tools/sh_sanadajunyushirabusutoraiku.html
- 必勝期待値クマぱぱ: https://xn--x9ja8p0go69l5jtgfm.com/sanadajyunyushi-love-2420
- 江戸スロ: https://edoslot.net/SHOP/sanadajunnyuusirabusutoraiku.html
- A-SLOT: https://www.a-slot.com/SHOP/excite16.html

### No.996 バーサス
- HAZUSE: https://hazuse.com/machine/pachislot/6S0371/
- HAZUSE初打講座: https://hazuse.com/machine/pachislot/6S0371/genre/203/
- P-WORLD: https://www.p-world.co.jp/machine/database/8083
- 一撃: https://1geki.jp/slot/s_versus/
- 一撃RT: https://1geki.jp/slot/s_versus/81/
- K-Navi: https://p-kn.com/slot/2540/
- グリーンべると: https://web-greenbelt.jp/00008774/
- ちょんぼりすた: https://chonborista.com/slot/acros-slot/21826/comment-page-5/
- A PROJECT設定判別まとめ: https://www.pachislotblog.tokyo/across-series-setteihanbetsu/
- けんのスロットシミュレーション: https://kenslo65536.com/kaiseki/versus-se.html

### 境界監査
- スロパチクエスト 2016年導入日順一覧: https://www.slopachi-quest.com/article/%E3%80%90%E5%B0%8E%E5%85%A5%E6%97%A5%E9%A0%86%E3%80%912016%E5%B9%B4%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E4%B8%80%E8%A6%A7%E3%81%BE%E3%81%A8%E3%82%81/
- モゲスロ 2016年新台カレンダー: https://moge-site.com/new-slot2016
