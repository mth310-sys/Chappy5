更新日: 2026-09-13

## 現在地点
- recordCount: **1507**
- latestRecordAdded: **スーパーハナハナ2-30 — No.1507**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-07-04_super-hanahana2-30.md`
- chronologicalFrontier: **2022-07-04**
- frontierLatestMachine: **スーパーハナハナ2-30 — No.1507**
- schema: **resetBehavior v0.7**
- status: **2022-07-04_GROUP_CLOSED_5_OF_5_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1506 `パチスロ アクエリオン ALL STARS` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機種 No.1507 `スーパーハナハナ2-30`（パイオニア、2022-07-04）を性能コア＋resetBehavior v0.7で追加。
- 正式型式 `Sスーパーハナハナ2D-30`、検定番号 `1S1736`、6.4号機AT、30Φ。パイオニア公式・業界記事・HAZUSE・複数解析を照合。
- 設定構成はL/1/2/3/5/6。機械割は設定1 97.5 / 2 99.5 / 3 101.8 / 5 104.5 / 6 107.1%。設定Lの初当り/機械割は公開固定できず `UNVERIFIED_AFTER_RESEARCH`。設定L時は下パネル常時点滅。
- ボーナス初当りは1/231→1/197、BIG 1/171→1/137、REG 1/345→1/279、合算1/114→1/92。ベース約33.6G/50枚、疑似ボーナスAT純増約3.3枚/G。
- BIG 60G/約200枚、REG 20G/約67枚。スーハナモードはボーナス約1/14、32G天井、期待獲得はA約580枚/B約1000枚/C約1560枚。
- 通常天井は約777G / 約999G。設定別777G選択率95.3→92.2%、999G 4.7→7.8%。
- resetBehaviorは設定変更で有利区間・天井・内部モード/状態RESET。据え置きではCARRY_OVER。純電源OFF→ONは有利区間・天井・内部モードCARRY_OVERを直接確認。
- 設定変更時および有利区間完走後は天井まで32G短縮。通常777/999G基準なら約745/967G相当で、HAZUSEは朝一968G以上ハマりを据え置き濃厚材料としている。
- 設定変更後・有利区間リセット後、1〜68G以内のボーナス当選時は50%でスーハナモードへ移行。これは朝一客AIに有効な公開リセット数値として保存。
- 有利区間ランプはWIN右下ドットで、ボーナス中のみ点灯・終了時消灯。通常時基本消灯のため変更判別には使えない。
- 固有ガックン、設定変更専用A/B/C振り分け、設定変更後68G以内のボーナス当選率そのもの、純電断時内部状態をモードと別項目で明示した直接資料は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- REG獲得枚数は最終複数資料の約67枚をcanonical。PiDEA導入前独自調査の約72枚は `CONFLICT_PRERELEASE_SECONDARY_VS_FINAL_MULTI_SOURCE` として平均せず保持。
- 2022-07-04群は月間カレンダーで確認した5機すべてNo.1503〜1507で処理済みとなり `CLOSED_5_OF_5_PROCESSED`。次の導入境界は2022-07-19で、Greenbeltの同日パチスロ欄は `パチスロ鉄拳5` のみ。

## No.1507 — スーパーハナハナ2-30
- path: `docs/real_machine_db/machines/2022-07-04_super-hanahana2-30.md`
- manufacturer: **パイオニア**
- formalModel: **Sスーパーハナハナ2D-30**
- inspectionCode: **1S1736**
- releaseDate: **2022-07-04**
- generation/system: **6.4号機 / AT / 疑似ボーナス / 30Φ / 連チャンモード**
- settings: **L / 1 / 2 / 3 / 5 / 6**
- payoutRate: **設定1 97.5 / 2 99.5 / 3 101.8 / 5 104.5 / 6 107.1%**（LはUNVERIFIED）
- initialHit: **1/231 / 1/224 / 1/216 / 1/206 / 1/197**（設定1/2/3/5/6）
- baseGamesPer50: **約33.6G/50枚**
- netIncrease: **約3.3枚/G**
- basicPayout: **BIG約200枚 / REG約67枚**
- ceiling: **通常約777Gまたは約999G→BIG濃厚 / 設定変更時32G短縮**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_WITH_MINOR_UNVERIFIED**
- confidence: **HIGH_CORE / HIGH_RESET_WITH_MINOR_UNVERIFIED / INDUSTRY_MODEL**

### resetBehavior v0.7 — No.1507
- **設定変更**: 有利区間・天井・内部モード/状態RESET。天井32G短縮。
- **据え置き**: 有利区間・天井・内部モード/状態CARRY_OVER。
- **純電源OFF→ON**: 有利区間・天井・内部モードCARRY_OVER。内部状態の別項目直接契約のみUNVERIFIED_AFTER_RESEARCH。
- **ゲーム数/天井**: 約777G / 約999G。設定変更後は約745G / 約967G相当。
- **モード/状態**: 設定変更でRESET、据え置きでCARRY_OVER。設定変更専用A/B/C振り分けはUNVERIFIED_AFTER_RESEARCH。
- **有利区間**: 設定変更RESET、据え置き/純電断CARRY_OVER。ランプは通常時基本消灯で判別不可。
- **朝一恩恵**: 天井32G短縮。1〜68G以内のボーナス当選時50%でスーハナモード移行。
- **朝一不利**: NONE_CONFIRMED_AFTER_RESEARCH。
- **変更判別**: ランプ不可。朝一968G以上ハマり/宵越し天井成立は据え置き濃厚材料。固有ガックンはUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: 32G天井短縮、1〜68G以内当選時50%でスーハナモード移行。

## 2022-07-04群 — CLOSED 5/5
1. `パチスロ甲鉄城のカバネリ` — **No.1503 処理済み**
2. `ニューゲッターマウス` — **No.1504 処理済み**
3. `パチスロ犬夜叉` — **No.1505 処理済み**
4. `パチスロ アクエリオン ALL STARS` — **No.1506 処理済み**
5. `スーパーハナハナ2-30` — **No.1507 処理済み**

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理: `docs/real_machine_db/machines/2007-02-12_tim-to-iu-na-no-pachislotki.md`（TIMという名のパチスロ機）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02_pachislot-tekken-den-tough.md`（パチスロ鉄拳伝タフ）**。
- 今回は本線No.1507の性能コア＋resetBehavior調査を優先し、遡及QAカーソルは変更していない。

## 次回本線の再開地点
- **No.1508候補 `パチスロ鉄拳5` — 2022-07-19。**
- Greenbelt 2022-07-19新台スケジュールでは同日パチスロ欄は鉄拳5のみ。処理後、地域差・延期・PB・別型式を再監査して7/19群CLOSED可否を判定する。

## GitHub保存
- No.1507追加 commit: `1ac22484114a852a3dcf3202137a5b1dbf834f86`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1507 スーパーハナハナ2-30
- https://www.slot-pioneer.co.jp/product/super_hanahana2/
- https://news.p-world.co.jp/articles/20022/nippon
- https://news.p-world.co.jp/articles/20024/yugitsushin
- https://news.p-world.co.jp/articles/20031/greenbelt
- https://hazuse.com/machine/pachislot/1S1736/
- https://hazuse.com/machine/pachislot/1S1736/genre/207/
- https://p.hisshobon.jp/machine/3886/1/89654
- https://p.hisshobon.jp/machine/3886/1/90301
- https://nana-press.com/kaiseki/machine/362/9175/
- https://1geki.jp/slot/s_shanahana2_30/3/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/137/kh01.php
- https://ichikatsu.com/superhanahana2/
- https://ichikatsu.com/newslot2022/
- https://news.p-world.co.jp/articles/21193/greenbelt
