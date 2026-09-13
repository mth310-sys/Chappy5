更新日: 2026-09-13

## 現在地点
- recordCount: **1559**
- latestRecordAdded: **Lゴブリンスレイヤー — No.1559**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-04-17_l-goblin-slayer.md`
- chronologicalFrontier: **2023-04-17**
- frontierLatestMachine: **Lゴブリンスレイヤー — No.1559**
- schema: **resetBehavior v0.7**
- status: **2023-04-17_GROUP_CLOSED_2_OF_2_CANONICAL_PROCESSED / NEXT_2023-05-08_GROUP**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1557 `スマスロ北斗の拳` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 直前handoffの次の未処理、2023-04-17群をPB・別型式・地域先行・延期/段階導入を含めて再監査。
- 複数導入資料で `アナザーゴッドハーデス-解き放たれし槍撃ver.-` と `Lゴブリンスレイヤー` の2023-04-17導入を照合し、今回確認範囲では同日パチスロ本線は2機でCLOSED。
- No.1558 / No.1559を性能コア + resetBehavior v0.7で追加。

## No.1558 — アナザーゴッドハーデス-解き放たれし槍撃ver.-
- manufacturer: **ミズホ / ユニバーサルエンターテインメント**
- formalModel: **S／アナザーゴッドハーデス／SL**
- inspectionCode: **2S0344（資料表示230344あり）**
- releaseDate: **2023-04-17**
- generation/system: **6.5号機 / メダルAT / GOD GAME + JUDGEMENT**
- payoutRate: **97.6 / 98.9 / 102.0 / 106.0 / 109.4 / 112.1%**
- GG初当り: **1/510.9 / 1/418.4 / 1/338.6 / 1/275.8 / 1/244.7 / 1/224.2**
- baseGamesPer50: **約33G/50枚**
- netIncrease: **約2.9枚/G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_LIMITED_PUBLIC_MORNING_NUMBERS**

### resetBehavior v0.7 — No.1558
- 設定変更: **有利区間・天井・内部モード/ヘルゾーン抽選状態RESET**。
- 据え置き: **CARRY_OVER**。
- 純電源OFF→ON: 天井・モード・HZ状態・有利区間を **CARRY_OVER** とする複数解析を採用。
- 通常天井 **1400G**。200/400GはHZ高確、666Gはヘルゾーン以上。
- 設定変更専用の天井短縮は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間開始ゲームでのレア小役JUDGEMENT抽選公開値あり（中段リプ10.2 / チャンス目12.5 / フェイクリプ12.5 / 右上がり黄7 39.8 / 中段黄7 75.0%）。設定変更専用ではなく有利区間開始時共通値として保存。
- 朝一序盤の初当たり優遇を示す後年実戦資料はあるが固定仕様・数値を高信頼複数資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプ判別不可。本機固有ガックン条件/発生率も `UNVERIFIED_AFTER_RESEARCH`。

## No.1559 — Lゴブリンスレイヤー
- manufacturer: **オレンジ（藤商事グループ / 販売: 藤商事）**
- formalModel: **LゴブリンスレイヤーRD**
- inspectionCode: **2S1588**
- releaseDate: **2023-04-17**
- generation/system: **6.5号機 / スマスロAT / セット継続型 + 上位AT**
- payoutRate: **97.8 / 98.9 / 101.2 / 105.4 / 110.0 / 114.9%**
- AT初当り: **1/547.9 / 1/538.4 / 1/517.7 / 1/492.3 / 1/470.5 / 1/435.7**
- CZ合算: **1/226 / 1/223 / 1/215 / 1/204 / 1/196 / 1/184**
- baseGamesPer50: **31.6 / 31.7 / 31.8 / 32.0 / 32.1 / 32.5G/50枚**
- netIncrease: **通常AT約2.7枚/G / 上位AT約5.0枚/G**
- basicPayout: **通常AT1セット100G / 上位AT1セット100G・約82%継続**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_NUMBERS**

### resetBehavior v0.7 — No.1559
- 設定変更: **有利区間・天井・内部状態・スイカ回数カウンター・小役履歴RESET**。
- 据え置き/純電源OFF→ON: **内部CARRY_OVER**。朝一表示は初期化されるため表示と内部値を分離。
- 天井は600/1000/1500Gから設定変更後・AT終了後に再抽選。
- 天井振り分け（600 / 1000 / 1500G）:
  - 設定1: 0.4 / 0.4 / 99.2%
  - 設定2: 1.2 / 2.7 / 96.1%
  - 設定3: 3.1 / 5.9 / 91.0%
  - 設定4: 5.1 / 10.9 / 84.0%
  - 設定5: 7.8 / 14.8 / 77.3%
  - 設定6: 12.5 / 23.0 / 64.5%
- 設定変更後1周期目（スイカ3回到達時）のCZ当選率: **66.6 / 66.8 / 67.3 / 67.8 / 68.2 / 70.8%**。
- 朝一ステージは設定変更/据え置きとも牧場or辺境の街。スイカカウンター表示も見た目では初期化されるため単独判別不可。
- 3の倍数以外のスイカ回数でCZ当選は据え置き可能性UP。AT終了画面「ゴブリンスレイヤーのみ」は設定変更濃厚。
- 本機固有ガックン条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。
- 上位AT中の有利区間リセット条件は藤商事開発室の公式系説明を優先し、単純な「毎セットリセット」記述をcanonicalにしない。

## 2023-04-17群 — CLOSED 2/2
1. アナザーゴッドハーデス-解き放たれし槍撃ver.- — No.1558
2. Lゴブリンスレイヤー — No.1559

## 次導入境界 — 2023-05-08
- 4/17以降の4月残りを導入一覧で再監査し、次の明確なパチスロ導入境界は2023-05-08。
- 現時点のknown:
  1. **L主役は銭形4**（オリンピア）
  2. **パチスロ 炎炎ノ消防隊**（ジェイビー）
  3. **マイフラワー2-30**（北電子）
- 境界CONFLICT候補: グリーンべると/P-WORLDの5/8更新記事には **L戦国BASARAギガZE（エンターライズ）** も5/8導入として掲載される一方、一撃2023年5月スケジュールは5/8パチスロ3機表示。次回はBASARAの実導入日・型式・地域/段階導入を先に再監査して正式キューを確定する。

## resetBehavior 遡及QA
- 本線の新規機種収集を優先して継続。
- 既存QA再開候補は `2007-06-25_morning-musume.md` の安全な全文更新可否確認後、`2007-07-08_caribbean-queen.md`。
- 既存性能値は再収集せず、resetBehaviorのみ必要時に遡及補完する。

## 今回の主要資料
### No.1558 ハーデス槍撃
- ユニバーサル公式: https://www.universal-777.com/product/slot/hades_sougeki/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-56530/
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/23797/greenbelt
- なな徹 朝一: https://nana-press.com/kaiseki/machine/530/13786/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/48/tj07-2.php
- ハズセ: https://hazuse.com/machine/pachislot/2S0344/
- すろぱちくえすと: https://www.slopachi-quest.com/article/anothergodhades-6-5-tenjou/

### No.1559 Lゴブリンスレイヤー
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-57404/
- 遊技通信 検定通過: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%E3%80%802023%E5%B9%B43%E6%9C%88%E3%81%BE%E3%81%A8%E3%82%81%EF%BC%883/
- 遊技通信/P-WORLD発表会: https://news.p-world.co.jp/articles/23265/yugitsushin
- なな徹 スペック: https://nana-press.com/kaiseki/machine/533/14356/
- なな徹 天井: https://nana-press.com/kaiseki/machine/533/14522/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/533/14523/
- すろぱちくえすと: https://www.slopachi-quest.com/article/goblinslayer-tenjou/
- フリック7: https://flick7.net/slot/reset_guide2023.php
- 藤商事 開発室: https://hitorigoto-fujimarukun.co.jp/l-goblinslayer/685/

### 境界監査
- グリーンべると/P-WORLD 2023-05-08新台スケジュール: https://news.p-world.co.jp/articles/23998/greenbelt
- 一撃 2023年5月新台スケジュール: https://1geki.jp/newmachinecalender/202305/
- すろぱちくえすと 2023導入機種一覧: https://www.slopachi-quest.com/article/2023-dounyuukisyu/

## 保存コミット
- No.1558追加: `62b39f1e1518e7985f9f9c6de0876ea35622baf1`
- No.1559追加: `02cafdf81eb9133b03a27e47c1da6bef3390bcc1`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1560候補 `L主役は銭形4`（2023-05-08）から継続。開始前に2023-05-08群を再監査し、特に `L戦国BASARAギガZE` の5/8導入表記と他一覧との差を解消/CONFLICT保持して正式順を確定する。その後 `パチスロ 炎炎ノ消防隊`、`マイフラワー2-30` を含め、性能コア + resetBehavior v0.7を収集する。**
