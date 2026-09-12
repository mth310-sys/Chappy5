更新日: 2026-09-12

## 現在地点
- recordCount: **1460**
- latestRecordAdded: **スーパーリノSP — No.1460**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-01-11_super-reno-sp.md`
- chronologicalFrontier: **2022-01-11**
- frontierLatestMachine: **スーパーリノSP — No.1460**
- schema: **resetBehavior v0.7**
- status: **2022-01-11_GROUP_OPEN_2_OF_3_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1459「バーサスリヴァイズ」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- 開始時点のmainは recordCount 1459 / chronologicalFrontier 2022-01-11 / `2022-01-11_GROUP_OPEN_1_OF_3_KNOWN_PROCESSED`。前回チャット側の古い再開地点ではなく、main正本指定の **スーパーリノSP** から継続。
- 2022-01-11群は現時点3タイトル：
  1. バーサスリヴァイズ — No.1459 / DONE
  2. スーパーリノSP — No.1460 / DONE
  3. 鬼浜爆走紅蓮隊 激闘謳歌編 — No.1461候補 / NEXT

## No.1460 — スーパーリノSP
- path: `docs/real_machine_db/machines/2022-01-11_super-reno-sp.md`
- manufacturer: **山佐ネクスト**
- formalModel: **SリノSPYTMM**
- certificationNumber: **1S0252**
- releaseDate: **2022-01-11**
- generation/system: **6.2号機 / 特殊ボーナスタイプ / リアルボーナス連チャン / リノ系**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.4 / 98.5 / 100.1 / 102.3 / 104.6 / 106.3%**
- bonusInitialHit: **1/565.8 → 1/221.3（canonical）**
- tomatoChance: **1/192.5 → 1/62.2**
- baseGamesPer50: **約38G（資料により38〜39G）**
- netIncrease: **BIG約4.7枚/G / REG約3.6枚/G（出玉増加区間）**
- basicPayout: **BIG平均123枚 / REG平均62枚**
- normalCeiling: **ボーナス間1831G+α → 中段トマト超高確率。ボーナス成立まで天井状態継続。**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_CONFLICT**
- confidence: **HIGH_WITH_RESET_CONFLICT**

### resetBehavior v0.7 — No.1460
- **設定変更**: 内部状態は引継ぎとする複数解析が一致。有利区間は非搭載。設定変更専用の短縮天井・朝一専用モード・固定初当り優遇は確認できず。
- **設定変更時の天井**: **CONFLICT**。Slopachi-Quest、スロがち、にくじる系資料はボーナス間1831G+αを設定変更でも引継ぎとする一方、イチカツはリセットと掲載。複数の後発/朝一解析一致からCARRY_OVER優勢と注記するが、平均化・断定せず競合保持。
- **据え置き**: ボーナス間天井・内部状態をCARRY_OVER。
- **純電源OFF→ON**: ボーナス間天井・内部状態をCARRY_OVER。複数解析で一致。
- **有利区間**: メーカー系PV紹介・複数解析で「有利区間なし」。朝一有利区間ランプ判別はNOT_APPLICABLE。
- **朝一恩恵/不利**: 設定変更自体による固定恩恵/不利は確認できず。前日ボーナス高確率状態なら、設定変更/電断でも状態持越し仕様により朝一も残る可能性があるが、これはリセット恩恵ではなく持越し特性。
- **変更判別**: 朝一1回目のボーナス終了時に下パネルフラッシュなら設定変更確定、疑似クレオフ音なら設定変更＋設定2以上濃厚とする解析あり。非発生では据え置き確定にならない。ガックン条件/発生率はUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: 設定変更専用のモード初期振り分け・朝一当選率・短縮天井数値は確認できず。numericResetDataは空。
- **RAMクリア**: 通常の設定変更とは分離。出荷状態でボーナス高確率開始とする前作踏襲推測はあるが、本機固有の確定仕様として固定せずUNVERIFIED。

### No.1460で保持したCONFLICT
1. **設定6ボーナス初当り**
   - 1/221.3: パチマガスロマガ / なな徹 / イチカツ / アタリ7 等
   - 1/211.3: HAZUSE設定推測ページ
   - 多数一致の1/221.3をcanonical採用し、HAZUSE値を競合保持。
2. **設定変更時の天井**
   - CARRY_OVER: Slopachi-Quest / スロがち / にくじる系
   - RESET: イチカツ
   - CARRY_OVER優勢だがCONFLICTのまま保存。
3. **ボーナス純増表記**
   - BIG約4.7枚/G / REG約3.6枚/G: なな徹・パチマガスロマガ系
   - BB純増3.8枚: パチスロメソッド
   - 出玉増加区間の定義が明確な4.7/3.6をcanonicalとし、3.8は定義不明競合として保持。

## 2021-12-20群 — CLOSED / 6独立レコード
1. パチスロ戦姫絶唱シンフォギア 勇気の歌 — No.1453
2. 沖ドキ！DUO — No.1454
3. 沖ドキ！DUO-30 — No.1455
4. シンデレラブレイド4 — No.1456
5. 秘宝伝 解き放たれた女神 — No.1457
6. パチスロ リング 運命の秒刻 — No.1458

## 2022-01-11群 — OPEN
1. **バーサスリヴァイズ — No.1459 / DONE**
2. **スーパーリノSP — No.1460 / DONE**
3. **鬼浜爆走紅蓮隊 激闘謳歌編 — No.1461候補 / NEXT**

## 次回本線の再開地点
- **「鬼浜爆走紅蓮隊 激闘謳歌編」＝No.1461候補**から開始。
- 2022-01-11導入 / ベルコ。前handoffで公式「2022年1月登場」と当時解析・導入カレンダーの1/11一致を確認済み。
- 型式・検定番号を登録時に再固定し、性能コアに加えてゲーム数天井・周期天井、設定L、有利区間、設定変更/据え置き/純電断、朝一恩恵・不利、変更判別、公開朝一数値を重点確認。
- No.1461処理後、2022-01-11群を別型式/PB/地域先行/延期・段階導入までクロス監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理済み: `docs/real_machine_db/machines/2007-01_marine-gang.md`（マリーンギャング）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 既存 `coreStatus: COMPLETE_CORE` は維持。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-01_aa-warera-nihonmatsu-judobu.md`（嗚呼!我ら日本松柔道部）**。
- 今回は本線前進を優先し、retro QAカーソルは進めていない。

## GitHub保存
- No.1459追加 commit: `a99520b429d32cab6b3a044c630305df61cb4a37`
- No.1460追加 commit: `2df17b987ada868ed761a65a57a1a080d1207697`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1460 スーパーリノSP
- https://news.p-world.co.jp/articles/18071/nippon
- https://news.p-world.co.jp/articles/19072/nippon
- https://hazuse.com/machine/pachislot/1S0252/
- https://hazuse.com/machine/pachislot/1S0252/genre/208/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/243/kh02.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/243/kh10-1.php
- https://www.p-world.co.jp/machine/database/9495
- https://www.slopachi-quest.com/article/super-reno-sp-tenjou/
- https://slogati.com/reno-sp/
- https://www.nikuziru.com/archives/8378
- https://ichikatsu.com/superrenosp/
- https://1geki.jp/slot/s_spreno_sp/
- https://nana-press.com/kaiseki/machine/165/7420/
- https://nana-press.com/post/1545652/2
