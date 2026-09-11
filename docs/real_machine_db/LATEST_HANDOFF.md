更新日: 2026-09-11

## 現在地点
- recordCount: **1372**
- latestRecordAdded: **回胴黙示録カイジ～沼～ — No.1372**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-10-19_kaiji-numa.md`
- chronologicalFrontier: **2020-10-19**
- frontierLatestMachine: **回胴黙示録カイジ～沼～ — No.1372**
- schema: **resetBehavior v0.7**
- status: **2020-10-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1370「吉宗3」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- 境界監査中、2020-09-23/10-05に導入日表記が競合する未登録 **「PACHISLOT リングにかけろ1 ワールドチャンピオンカーニバル編」** を発見。9/23当日の実店舗稼働、複数解析・機種一覧で9/23実導入を確認したため、漏れ防止優先で **No.1371** として遡及追加。10/4納品予定・10/5表記はCONFLICT保持。
- その後、本線の2020-10-19 **「回胴黙示録カイジ～沼～」** を **No.1372** として追加。
- 2020-10-19は導入カレンダー・パチビー・必勝本・HAZUSE等でカイジ沼1機を確認し、同日に追加すべき別パチスロを固定できなかったため **CLOSED**。
- 次の明確な導入群は **2020-11-02**。1gekiカレンダーではパチスロ4機: `～ガールズケイリン～GⅠフェアリーグランプリ` / `パチスロ七つの大罪` / `パチスロ学園黙示録ハイスクール・オブ・ザ・デッド ゴールド` / `華祭`。

## No.1371 — PACHISLOT リングにかけろ1 ワールドチャンピオンカーニバル編（遡及漏れ回収）
- path: `docs/real_machine_db/machines/2020-09-23_ring-ni-kakero1-wcc.md`
- manufacturer: **スパイキー（開発系表記: エンターライズ）**
- formalModel: **S RK1 WCC編YB**
- releaseDate canonical: **2020-09-23**
- releaseDate conflict: **2020-09-23 vs 2020-10-05**（10/4納品予定資料もあり）
- generation/system: **6号機 / 差枚数管理AT / 周期+CZ / 有利区間管理**
- 出玉率: **97.7 / 99.0 / 100.8 / 104.5 / 107.0 / 110.1%**
- AT初当たり: **1/499.4 / 1/476.5 / 1/462.5 / 1/424.6 / 1/416.9 / 1/381.3**
- base: **約50G/50枚**
- netIncrease: **約3.1枚/G**
- 天井: **999G+αでAT**。
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED_WITH_DETECTION_DATA**

### resetBehavior v0.7 — No.1371
- 設定変更: **有利区間/天井進行RESET**。設定変更後/CZ・AT後の竜児勝率は50%開始。
- 設定変更専用の固定短縮天井は確認なし。
- 通常時有利区間ランプは基本消灯のため、朝一ランプだけでは変更判別不可。
- 朝一1回目CZで表面上「真ギリシアバトル」が発生しないという当時解析あり。ただし内部真ギリシア相当時は青7恩恵へ置換という説明があり、確定判別扱いにはしない。
- 据え置き/純電源OFF→ON時の天井・周期・アイコン・竜児勝率の完全な直接引継ぎ契約、本機固有ガックンは再探索後も `UNVERIFIED_AFTER_RESEARCH`。

## No.1372 — 回胴黙示録カイジ～沼～
- path: `docs/real_machine_db/machines/2020-10-19_kaiji-numa.md`
- manufacturer: **銀座 / サミー**
- formalModel: **Sカイジ沼KR**
- certificationNumber: **9S1396**
- releaseDate: **2020-10-19**
- generation/system: **6号機 / CZ経由+AT直撃 / 1セット300枚AT / 有利区間管理**
- 出玉率: **97.9 / 99.1 / 100.9 / 104.0 / 108.1 / 110.2%**
- AT初当たり: **1/1189.7 / 1/1138.2 / 1/1077.5 / 1/979.3 / 1/908.6 / 1/893.3**
- base: **約51.0G/50枚**
- netIncrease: **約9.0枚/G**
- 沼BONUS: **1セット300枚 / 最大4セット約1200枚**、ED到達率約70%（設定1）～約88%（設定6）。
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_NUMERIC_DATA**

### resetBehavior v0.7 — No.1372
- 設定変更: **天井G RESET / 内部モード再抽選 / 非有利区間へ移行 / 有利区間ランプ消灯**。
- 据え置き/純電源OFF→ON: **天井G・内部モード・内部状態・有利区間CARRY_OVER**。
- 設定変更専用の一律短縮天井は確認なし。再抽選されたモード別天井を適用。
- モード別天井: **通常A 700G+α / 通常B 550G+α / 天国 250G+α / 特殊 750G+α**。有利区間継続時のみ続行200G+α（別資料は256G以内CZ表現）。
- 設定1の有利区間開始時天国選択率は **約25%**。
- 有利区間移行後は遠藤車ステージを経て帝愛/ZAWA ZAWAへ。平均獲得ペリカ **約400 / 約800**。
- 通常時有利区間ランプは基本点灯のため、未対策なら **朝一消灯=設定変更濃厚 / 点灯=据え置き濃厚**。
- 本機固有ガックンは再探索後も `UNVERIFIED_AFTER_RESEARCH`。

## 2020-09-23境界再監査 — GAP RECOVERED / RECLOSED
- 既登録 No.1368「パチスロ 対魔導学園35試験小隊」に加え、No.1371「リングにかけろ1 WCC」を遡及追加。
- リンかけは9/23実導入と10/5表記が競合するが、9/23当日の実店舗稼働実績まで確認できるため9/23 canonical。
- これにより旧9/23境界の漏れを回収。

## 2020-10-19群監査 — CLOSED
- **回胴黙示録カイジ～沼～ / Sカイジ沼KR**: No.1372処理済み。
- 2020年導入カレンダー、パチビー、必勝本、HAZUSE、当時解析を横断し、10/19同日へ追加すべき別パチスロを固定できず **CLOSED**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理: `docs/real_machine_db/machines/2007-04_dance-man.md`（ダンス☆マン）。reset側 `PARTIAL_RESEARCH_EXHAUSTED`。
- 次回遡及QA: **`docs/real_machine_db/machines/2007-04-01_slot-channel-tv.md`（スロットチャンネルTV）**。
- 今回は本線+時系列漏れ回収を優先し、遡及QA地点は進めていない。

## 次回本線の再開地点
- 最新main再同期後、**2020-10-20～11-01境界監査 → 2020-11-02群**を開始。
- 11/02群の確認済みキュー:
  1. **～ガールズケイリン～GⅠフェアリーグランプリ — No.1373候補**
  2. **パチスロ七つの大罪**
  3. **パチスロ学園黙示録ハイスクール・オブ・ザ・デッド ゴールド**
  4. **華祭**
- 4機処理後、全メーカー・別型式・別スペック・PB・地域差・延期機まで横断監査してCLOSED可否を判定する。

## GitHub保存
- No.1371遡及追加 commit: `12415ed37ef7d8d9a70faa0feeff6cc3b8e6d3d5`
- No.1372追加 commit: `3a276d37499504c4ed7f8da5becfc3a7b0113bf0`
- 直前No.1370追加 commit: `5913cd39c228b90b157fe1058297564b9a1f4046`

## 主要出典 — 取得日 2026-09-11
### No.1371 リングにかけろ1 WCC
- グリーンべると: https://web-greenbelt.jp/post-40136/
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/117258/
- 期待値見える化: https://note.com/dakuo_slot/n/n1c0c553572f4
- なな徹機種一覧: https://nana-press.com/kaiseki/index/machine/s/ra/
- すろぱちクエスト（10/5表記のCONFLICT）: https://www.slopachi-quest.com/article/rinkake-world-tenjou/

### No.1372 回胴黙示録カイジ～沼～
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/14326/greenbelt
- パチビー: https://www.pachibee.jp/machines/index/220020002
- HAZUSE: https://hazuse.com/machine/pachislot/9S1396/
- 必勝本: https://p.hisshobon.jp/machine/3496/1/77019
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/106156/
- 期待値見える化: https://slotjin.com/tenjoukitaichi/kaijinuma/
- 1gekiモード: https://1geki.jp/slot/s_kaiji_numa/44/

### 次群監査
- 1geki 2020年11月導入カレンダー: https://1geki.jp/newmachinecalender/202011/
