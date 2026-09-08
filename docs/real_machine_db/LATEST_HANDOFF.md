更新日: 2026-09-08

## 現在地点
- recordCount: **1024**
- latestRecordAdded: **パチスロ ウィッチクラフトワークス**（DAXEL）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-11-14_witch-craft-works.md`
- chronologicalFrontier: **2016-11-14**
- frontierLatestMachine: **パチスロ ウィッチクラフトワークス — No.1024**
- schema: **resetBehavior v0.7**
- status: **2016-11-14_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2016-11-15_TO_2016-11-20_BOUNDARY_AUDIT_NEXT / 2016-11-21_GROUP_NEXT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1023実レコードを再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり最新 `LATEST_HANDOFF.md` + main実レコードを進捗正本として使用。
- handoff正本 **1023件 / chronologicalFrontier 2016-11-14 / 11/14群OPEN** から継続。
- 次未処理 DAXEL「パチスロ ウィッチクラフトワークス」をGitHub内重複確認し、No.1024として追加。
- 11/14群を導入カレンダー・メーカー系・業界資料で横断監査。現時点で全国導入本線として固定できたのは **凪のあすから / ウィッチクラフトワークス** の2機種。
- PiDEAの5号機設置期限一覧には `オアシスデイズ / パチスロおそ松さん / アイムジャグラーEX Anniversary Edition` が2016-11-14表記で並ぶが、個別一次/当時資料ではそれぞれ後発機であることを確認したため11/14群へ誤登録しない。
  - オアシスデイズ: パイオニアが2016-11-30内覧会、2017-01-29納品開始予定と業界記事で確認。
  - パチスロおそ松さん: 2016-12-08発表会、2017-02-06ホール導入開始を確認。
  - アイムジャグラーEX Anniversary Edition: 2017-01-13発表、2017-03-13導入を確認。北電子公式検定情報の2016-11各日付は都道府県別公示日で、導入日ではない。
- 上記により11/14群は `CLOSED_FOR_CURRENT_RESEARCH` と判定。

## No.1024 — パチスロ ウィッチクラフトワークス
- manufacturer: **DAXEL**
- releaseDate canonical: **2016-11-14**
- formalModelName: **ウィッチクラフトワークス/DA**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / ART / 擬似ボーナス / 周期抽選**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.5 / 99.3 / 100.5 / 104.1 / 106.2 / 110.5%**。
- S-BIG: **1/1811 / 1779 / 1847 / 1792 / 1812 / 1702**。
- BIG: **1/305 / 283 / 267 / 249 / 229 / 198**。
- REG: **1/627 / 605 / 529 / 494 / 502 / 370**。
- ボーナス初当たり合算: **1/347 / 337 / 288 / 272 / 264 / 195**。
- ベース: **約48G/50枚**。
- 純増: **約2.0枚/G**。
- 平均獲得: REG約**90枚** / BIG約**190枚** / S-BIG約**330枚**。
- 通常天井: **ボーナス間999G+前兆 または 最大10周期**。

### resetBehavior v0.7
- 設定変更: ゲーム数/周期天井RESET、内部モードは通常A、周期状態を再抽選。
- 据え置き / 純電源OFF→ON: ゲーム数天井・周期天井・内部モード・内部状態をCARRYOVER。
- 設定変更後周期天井: **最大7周期へ短縮**。
- 設定変更後周期天井振り分け: **1周期35.55 / 2周期1.6 / 3周期16.8 / 4周期1.6 / 5周期16.0 / 6周期1.6 / 7周期27.0%**。
- 設定変更時周期状態: **通常75.0 / 高確23.8 / クライマックス1.2%**。
- 設定変更後初回ボーナス: **S-BIG4.7 / N-BIG75.4 / REG19.9%**、BIG系合計**80.1%**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- ガックン等の本機固有確定変更判別は、検索語・資料系統変更後も直接固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### conflicts / quality
- 導入日は、ちょんぼりすた・期待値見える化等に加え大黒電機2016年11月24日決算説明資料が **2016-11-14より全国導入開始**と明記するため11/14をcanonical。
- パチビーは11/21表記のため `CONFLICT_RELEASE_DATE_2016_11_14_VS_2016_11_21` として保持し平均化しない。
- 型式 `ウィッチクラフトワークス/DA` は中古実機流通資料で確認。検定番号は推測しない。

## 2016-11-14群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- **パチスロ 凪のあすから**（NET）— No.1023
- **パチスロ ウィッチクラフトワークス**（DAXEL）— No.1024

誤混入防止:
- **オアシスデイズ** — 2017-01導入側。11/14へ入れない。
- **パチスロおそ松さん** — 2017-02-06導入。11/14へ入れない。
- **アイムジャグラーEX Anniversary Edition** — 2017-03-13導入。北電子公式2016-11日付は検定公示日。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、2006-03-27より後の既存未QAレコードを最新main実体から順次特定して補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1024を再取得。
2. **1024件 / chronologicalFrontier 2016-11-14 / 11/14群CLOSED** を正本として継続。
3. **2016-11-15〜11-20境界監査**を日付別カレンダー・メーカー別一覧・当時業界資料で実施。
4. 境界に未処理全国導入機がなければ **2016-11-21群**へ前進。先行確認候補は **SLOTスターオーシャン4**、**パチスロ牙狼 -守りし者-**。各機種の実導入日はメーカー/当時業界資料で再固定してから登録する。
5. PARTIAL/UNVERIFIEDは機種名・型式名・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等を組み替え、公式・業界・当時解析・古いDB・アーカイブ/回顧資料を横断後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1024 パチスロ ウィッチクラフトワークス
- 大黒電機 2017年3月期第2四半期決算説明資料（2016-11-24）: https://www.daikoku.co.jp/ir/wp-content/uploads/2023/05/161124.pdf
- ちょんぼりすた: https://chonborista.com/slot/daxel-slot/26251/
- スロパチクエスト reset: https://www.slopachi-quest.com/article/witch-craft-works-reset/
- 期待値見える化: https://slotjin.com/zone/witchcw/
- スロットガーデン: https://xn--mckza4ard4ttb2d.com/witchcraftworks
- パチビー（11/21表記）: https://www.pachibee.jp/movies/index/13087
- パチスロバンク（型式DA）: https://pachislobank.com/smp/item/s-daxel0008.html
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/2859/1/60543

### 11/14境界監査の誤混入防止
- PiDEA 5号機設置期限一覧: https://pidea.jp/articles/1620982702
- パイオニア2016製品一覧: https://www.slot-pioneer.co.jp/products/2016.html
- PiDEA オアシスデイズ発表: https://www.pidea.jp/articles/%E3%83%91%E3%82%A4%E3%82%AA%E3%83%8B%E3%82%A2%E3%83%BB25%CF%86%E3%81%AE%E3%83%8F%E3%82%A4%E3%83%93%E3%82%B9%E3%82%AB%E3%82%B9%E3%80%8C%E3%82%AA%E3%82%A2%E3%82%B7%E3%82%B9%E3%83%87%E3%82%A4%E3%82%BA%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8
- グリーンべると オアシスデイズ: https://news.p-world.co.jp/articles/8879/greenbelt
- K-Navi パチスロおそ松さん: https://p-kn.com/slot/2687/
- ビーズログ おそ松さん発表会: https://www.bs-log.com/special/osomatsu/20161208_913199.html
- 北電子 Anniversary Edition検定情報: https://www.kitadenshi.co.jp/slot-kentei/anniversaryedition/
- パチビー Anniversary Edition: https://www.pachibee.jp/movies/index/13433
