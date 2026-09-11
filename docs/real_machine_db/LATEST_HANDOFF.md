更新日: 2026-09-11

## 現在地点
- recordCount: **1326**
- latestRecordAdded: **パチスロたまピー — No.1326**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-12-22_pachislot-tamapi.md`
- chronologicalFrontier: **2019-12-22**
- frontierLatestMachine: **パチスロたまピー — No.1326**
- schema: **resetBehavior v0.7**
- status: **2019_YEAR_END_BOUNDARY_OPEN_PENDING_12_24_TO_2020_01_05_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1325「S沖っ娘25」を再取得。
- `INDEX.md` は旧19件表示のため、README明示ルールどおり最新 `LATEST_HANDOFF.md` とmain実レコードを正として継続。
- main上で「パチスロたまピー」の既存レコードなしを確認し、No.1326として新規追加。
- PB機のため、一般機種DBだけでなく遊技通信、PiDEA/情報島、グリーンべると、P-WORLD、K-Navi、1geki、パチ7、パチマガスロマガ、JPS回顧まで横断。
- 2019-12-22と12-23の導入日差は平均化せずCONFLICTとして正式保存。

## No.1326 — パチスロたまピー
- path: `docs/real_machine_db/machines/2019-12-22_pachislot-tamapi.md`
- manufacturer: **JPS（ジェイピーエス） / 玉屋共同開発PB**
- formalModel: **`STMPAA`**
- certificationNumber: **PUBLIC_VALUE_NOT_FIXED_AFTER_RESEARCH**
- releaseDate canonical: **2019-12-22**
- releaseDate conflict: **2019-12-23**
- generation/system: **6号機 / ノーマルタイプ / 完全告知 / PB / 設定5・6の2段階**
- full-strategy payout: **設定5 約102% / 設定6 約103%**
- bonus combined: **設定5 約1/139（K-Navi 1/139.7） / 設定6 約1/116（同1/116.2）**
- BIG/REG（1geki自社調査）: **設定5 1/156・1/1310 / 設定6 1/232・1/232**
- base: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- basic payout: **BIG最大195枚 / BONUS GAME最大104枚**
- ceiling: **非搭載**
- coreStatus: **PARTIAL_CORE_BASE_UNVERIFIED**

### resetBehavior v0.7 — No.1326
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED_NO_PERSISTENT_CEILING_OR_MODE**
- 天井: 非搭載のため、gameCounterReset / ceilingAfterReset はN/A。
- 公開モード管理: 確認なし。設定変更専用モード振り分け/朝一専用モードも確認なし。
- 有利区間: 6号機純ノーマル・AT/ART非搭載のため、本DBで追跡する朝一有利区間契約はN/A。
- 設定変更/据え置き/純電断: 本機固有の成立済みボーナス、初期出目、告知状態等の直接契約は、検索語・資料系統変更後も固定できずUNVERIFIED。
- 朝一恩恵/不利: 天井短縮、モード優遇、専用初当たり優遇等はNONE_CONFIRMED_AFTER_RESEARCH。
- 変更判別: 本機固有ガックン条件/率、朝一ランプ/7セグ/出目による確定契約はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 100G以内等のボーナス時楽曲変化は通常演出条件であり、設定変更専用恩恵には含めない。

## No.1326 CONFLICT
### releaseDate
- **2019-12-22**: 遊技通信（P-WORLD転載）が「12月22日から玉屋グループ全16店舗に導入」と明記。
- **2019-12-23**: K-Navi、1geki、パチ7などがホール導入開始日として掲載。
- **2019-12下旬**: PiDEA・グリーンべると。
- 当時業界記事の具体的な最初の導入日を優先し12/22をchronological canonical。12/23は機種DB上の一般導入日として保持。

## 2019年末境界
- 12/09群は前回までにCLOSED済み。
- 12/22/23 PB「パチスロたまピー」をNo.1326として処理済み。
- **12/24～2020-01-05は追加独立登録機がないか引き続き全メーカー/PB/地域差/別型式で監査する。現時点ではCLOSEDにしない。**
- 次の通常導入候補は **2020-01-06「パチスロ1000ちゃん」**。K-Navi、当時解析で2020-01-06を確認。6号機A+AT、約37.5G/50枚、純増約2.0枚/G、777G+α天井等の先行資料あり。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 次の未formalized候補は前handoff継承の **`2007-03_wild7.md`（ワイルド7）**。本線を止めず、余力のあるリレーで順次処理。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1326を再取得。
2. 2019-12-24～2020-01-05境界を全メーカー/PB/地域差/別型式で最終監査し、CLOSED可否を判定。
3. 追加機がなければ **「パチスロ1000ちゃん」No.1327候補（2020-01-06）** を性能コア＋resetBehavior v0.7で収集。
4. 同日2020-01-06群の他機種を洗い出し、順番に処理。
5. 遡及QAは `2007-03_wild7.md` から継続。

## 主要出典 — 取得日 2026-09-11

### No.1326 パチスロたまピー
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/12457/yugitsushin
- PiDEA X/情報島: https://www.pidea.jp/articles/%EF%BD%8A%EF%BD%90%EF%BD%93%E7%8E%89%E5%B1%8B%E3%81%A8%E5%85%B1%E5%90%8C%E9%96%8B%E7%99%BA%E3%81%97%E3%81%9F%EF%BD%90%EF%BD%82%E6%A9%9F%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%81%9F%E3%81%BE%E3%83%94%E3%83%BC%E3%80%8D%E3%82%92%E7%99%BA%E8%A1%A8
- グリーンべると: https://web-greenbelt.jp/post-27491/
- K-Navi: https://p-kn.com/slot/3375/
- 1geki: https://1geki.jp/slot/s_tamapy/
- 1geki bonus: https://1geki.jp/slot/s_tamapy/1/
- 1geki ceiling/reset: https://1geki.jp/slot/s_tamapy/3/
- P-WORLD: https://www.p-world.co.jp/machine/database/9103
- パチ7: https://pachiseven.jp/machines/5955/cutout/5
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/43/a.php
- パチマガスロマガ bonus: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/43/h.php
- JPS回顧（パチ7）: https://pachiseven.jp/articles/detail/11436

### 次候補 パチスロ1000ちゃん
- K-Navi: https://p-kn.com/slot/3363/
- すろぬー: https://slonuu.com/pg/s-1000chan
- すろぱちくえすと: https://www.slopachi-quest.com/article/1000chan-settei/
