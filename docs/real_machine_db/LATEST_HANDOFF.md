更新日: 2026-09-12

## 現在地点
- recordCount: **1461**
- latestRecordAdded: **鬼浜爆走紅蓮隊 激闘謳歌編 — No.1461**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-01-11_onihama-gekitou-ouka.md`
- chronologicalFrontier: **2022-01-11**
- frontierLatestMachine: **鬼浜爆走紅蓮隊 激闘謳歌編 — No.1461**
- schema: **resetBehavior v0.7**
- status: **2022-01-11_GROUP_CLOSED_3_OF_3_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1460「スーパーリノSP」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- 開始時点のmainは recordCount 1460 / chronologicalFrontier 2022-01-11 / `2022-01-11_GROUP_OPEN_2_OF_3_KNOWN_PROCESSED`。main正本指定の **鬼浜爆走紅蓮隊 激闘謳歌編** から継続。
- 2022-01-11群は新台カレンダー再監査で次の3タイトルを確認し、全件処理済みのためCLOSED判定。
  1. バーサスリヴァイズ — No.1459 / DONE
  2. スーパーリノSP — No.1460 / DONE
  3. 鬼浜爆走紅蓮隊 激闘謳歌編 — No.1461 / DONE

## No.1461 — 鬼浜爆走紅蓮隊 激闘謳歌編
- path: `docs/real_machine_db/machines/2022-01-11_onihama-gekitou-ouka.md`
- manufacturer: **ベルコ**
- formalModel: **Sオニハマ4VSH3**
- certificationNumber: **1S0065**
- releaseDate: **2022-01-11**
- generation/system: **6号機（6.1/6.2表記CONFLICT） / AT / 周期抽選 / 擬似ボーナス**
- settings: **L / 1 / 2 / 3 / 4 / 6**
- payoutRate: **80.5 / 97.4 / 98.5 / 101.4 / 104.5 / 108.1%**
- bonusInitialHit: **設定1 1/298.1 → 設定6 1/228.7（設定Lは公開固定値未確認）**
- baseGamesPer50: **約38G**
- netIncrease: **約4.5枚/G**
- basicPayout: **ツッパリボーナス20G / 鬼浜ボーナス20G。特攻ボーナスはトータル1000枚獲得濃厚。**
- normalCeiling: **通常時700G+α or 12周期到達 → ツッパリボーナス。1周期50/100/150G、平均約80G。**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- confidence: **HIGH_CORE_MEDIUM_RESET_WITH_GENERATION_CONFLICT**

### resetBehavior v0.7 — No.1461
- **設定変更**: 有利区間RESET、ゲーム数天井RESET、周期G RESET。液晶G数は「???」、鹿広場ステージ開始とする複数解析あり。
- **据え置き / 純電源OFF→ON**: 有利区間・ゲーム数天井・周期GをCARRY_OVER。液晶表示は「???」、鹿広場スタートのため見た目だけでは内部周期Gを直接読めない。
- **内部状態**: 設定変更時/純電断時とも当時解析に「調査中」が残り、検索語・資料系統を変えた十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- **天井短縮/朝一専用恩恵**: 設定変更専用の短縮天井・専用モード・固定初当り優遇・公開朝一当選率は確認できず。numericResetDataは空。
- **変更判別**: 解析上、朝一有利区間ランプ点灯=据え置き濃厚 / 消灯=設定変更濃厚（前日消灯閉店・店舗対策等を除く）。本機固有ガックン条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。
- **設定L**: 出玉率80.5%。デモ画面中に下パネル消灯で判別可能と複数資料で一致。設定変更判別とは別の特殊設定識別として保持。

### No.1461で保持したCONFLICT
1. **号機細分類**
   - 6.2号機: イチカツ等
   - 6.1号機: Slopachi-Quest、ちょんぼりすた系一部資料等
   - 型式・性能値には影響させず `6号機（6.1/6.2表記CONFLICT）` として保持。

## 2022-01-11群 — CLOSED / 3独立レコード
1. バーサスリヴァイズ — No.1459
2. スーパーリノSP — No.1460
3. 鬼浜爆走紅蓮隊 激闘謳歌編 — No.1461

## 次回本線の再開地点
- **2022-01-17「沖ワニマル」から開始。**
- 新台カレンダーでは1/17群の先頭として確認済み。
- 検定DBでは少なくとも **SオキワニマルBA（25φ）** と **SオキワニマルAA-30（30φ）** の別型式が存在し、公開性能値も25φ/30φで差があるため、同一レコードへ安易に統合せず独立レコード要否を最初に固定する。
- 現時点の候補順は **No.1462候補: 沖ワニマル（25φ / SオキワニマルBA）** → **No.1463候補: 沖ワニマル-30（SオキワニマルAA-30）**。正式商品名・導入日の同日性・性能差を登録時に再照合する。
- 2022-01-17群完了後、PB/地域先行/別型式/延期・段階導入までクロス監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理済み: `docs/real_machine_db/machines/2007-01_marine-gang.md`（マリーンギャング）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 既存 `coreStatus: COMPLETE_CORE` は維持。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-01_aa-warera-nihonmatsu-judobu.md`（嗚呼!我ら日本松柔道部）**。
- 今回は本線前進を優先し、retro QAカーソルは進めていない。

## GitHub保存
- No.1459追加 commit: `a99520b429d32cab6b3a044c630305df61cb4a37`
- No.1460追加 commit: `2df17b987ada868ed761a65a57a1a080d1207697`
- No.1461追加 commit: `9e4153284f2b65ce4b1baf2c849f7cb028823c5d`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1461 鬼浜爆走紅蓮隊 激闘謳歌編
- https://news.p-world.co.jp/articles/17999/nippon
- https://web-greenbelt.jp/post-50376/
- https://zenrin-net.com/kenteis/listsend?machinesort_id=2&order_date=2024
- https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/2109/documents/90168_20210924100448-1.pdf
- https://www.p-world.co.jp/machine/database/9496
- https://nana-press.com/kaiseki/machine/163/
- https://nana-press.com/kaiseki/machine/163/7408/
- https://nana-press.com/kaiseki/machine/163/7410/
- https://nana-press.com/kaiseki/machine/163/7412/
- https://nana-press.com/kaiseki/machine/163/7416/
- https://chonborista.com/slot/belko-slot/154177/
- https://www.slopachi-quest.com/article/onihama-gekitououka-tenjou/
- https://ichikatsu.com/onihamageki/
- https://ichikatsu.com/newslot2022/
