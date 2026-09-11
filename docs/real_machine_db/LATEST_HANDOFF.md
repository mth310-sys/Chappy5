更新日: 2026-09-12

## 現在地点
- recordCount: **1390**
- latestRecordAdded: **パチスロ バイオハザード7 レジデント イービル — No.1390**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-02-08_biohazard7-resident-evil.md`
- chronologicalFrontier: **2021-02-08**
- frontierLatestMachine: **パチスロ バイオハザード7 レジデント イービル — No.1390**
- schema: **resetBehavior v0.7**
- status: **2021-02-08_GROUP_OPEN_1_OF_5_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1389「南国育ち-30」を再取得して開始。
- `INDEX.md` は旧表示（19件）のため、README規定どおり最新handoffとmain実レコードを正本として進捗を判定。
- handoff指定の次機種 **No.1390「パチスロ バイオハザード7 レジデント イービル」**を追加。
- 2021-01-12群は前回CLOSED済み。2021-01-25 / 2021-02-01のパチスロ新台0機境界も前回監査済みのため、2021-02-08群へ進行。
- 遡及resetBehavior QAは今回本線を優先し、カーソルを進めていない。

## No.1390 — パチスロ バイオハザード7 レジデント イービル
- path: `docs/real_machine_db/machines/2021-02-08_biohazard7-resident-evil.md`
- manufacturer: **アデリオン / 総発売元ユニバーサルエンターテインメント**
- formalModel: **Sバイオハザード7XE**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2021-02-08**
- generation/system: **6.1号機 / ゲーム数上乗せ型AT / 2戦突破型CZ**
- payoutRateBySetting: **97.9 / 99.0 / 100.8 / 105.5 / 108.7 / 111.0%**
- CB初当たり: **1/408.6 / 393.8 / 385.7 / 379.8 / 373.6 / 375.5**
- AT初当たり: **1/927.7 / 881.6 / 812.2 / 645.7 / 549.5 / 473.2**
- baseGamesPer50: **約50.2G**
- netIncrease: **約5.0枚/G**
- basicPayout: **固定枚数型ではなく、AT開始時特化ゾーン。シューティングアタック平均上乗せ81.0G、エヴリンインパクト140.1G（設定1）**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_POWER_CYCLE_PARTIAL_UNVERIFIED**

### resetBehavior v0.7 — No.1390
- 設定変更: **有利区間RESET**。新規有利区間の規定G/モード抽選を受ける。
- モード別天井: **通常A 753G / B 603G / C 503G / 天国153G**。設定変更専用の固定短縮天井は確認されない。
- 有利区間移行時の通常成立役時モード振り分けは公開済み。設定1→6で通常A **30.3→12.6%**、B **18.7→24.7%**、C **17.8→24.8%**、天国 **33.2→37.9%**。
- 有利区間移行1G目が弱レア役/強チャンス目/強チェリーなら、いずれも**天国50.0%**。これは設定変更専用ではなく有利区間移行時共通値。
- 有利区間移行時は**MDAストック1個**。これも設定変更専用ではなく共通仕様。
- 有利区間ランプ: **朝一消灯=設定変更濃厚 / 点灯=据え置き濃厚**。前日消灯ヤメ・CZ/AT終了直後・店側対策などの例外があるため確定条件にはしない。
- AT終了時等の有利区間引継ぎは設定変更とは別仕様。引継ぎ時は特別モードで最大293G、ラストチャンス獲得。
- 純電源OFF→ONの本機専用天井/モード/状態契約、据え置き時の天井G・モード個別引継ぎ表、本機固有ガックン条件/率は、表記揺れ・型式名・電断/据え置き/朝一/有利区間等で公式、業界、当時解析、旧DB、回顧資料を再探索したが高信頼直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- certificationNumberも検定通過・型式は確認できたが番号を高信頼資料で固定できず **UNVERIFIED_AFTER_RESEARCH**。

## 2021-02-08群 — OPEN
固定キュー候補（前回handoff + 2021年2月カレンダー）:
1. **パチスロ バイオハザード7 レジデント イービル — No.1390 / DONE**
2. **パチスロ フレームアームズ・ガール — NEXT / No.1391候補**
3. **パチスロ ゴッドイーター ジ・アニメーション**
4. **政宗３**
5. **KING黄門ちゃま**

- status: **2021-02-08_GROUP_OPEN_1_OF_5_KNOWN_PROCESSED**。
- 5機処理後、1geki・K-Navi・当時新台一覧・メーカー/検定資料を再横断し、別型式・PB・地域差・延期機を監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新mainを再同期後、同じ2021-02-08群の **No.1391候補「パチスロ フレームアームズ・ガール」** から継続。
- 同型式/派生・発売日差・地域差を先に確認し、性能コア + resetBehavior v0.7を同時収集する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-04-08_super-bomb.md`（スーパーボム）。
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**。
- 性能側 `coreStatus: PARTIAL` は維持。
- 次回遡及QAカーソルは **`docs/real_machine_db/machines/2007-05-13_urusei-yatsura.md`（うる星やつら）**。

## GitHub保存
- No.1390追加 commit: `2499a59ac2ebb53b921813aa84facdc54e321e15`

## 主要出典 — 取得日 2026-09-12
### No.1390 バイオハザード7
- https://www.universal-777.co.jp/news/20201207001491/
- https://web-greenbelt.jp/post-42692/
- https://web-greenbelt.jp/post-44023/
- https://p-media.info/post-25697/
- https://opt.p-world.co.jp/machine/database/9303
- https://1geki.jp/slot/s_bh7/
- https://1geki.jp/slot/s_bh7/3/
- https://1geki.jp/slot/s_bh7/6/
- https://1geki.jp/slot/s_bh7/44/
- https://1geki.jp/slot/s_bh7/82/
- https://1geki.jp/slot/s_bh7/83/
- https://1geki.jp/slot/s_bh7/88/
- https://nana-press.com/kaiseki/machine/105/2469/
- https://nana-press.com/kaiseki/machine/105/2474/
- https://nana-press.com/kaiseki/machine/105/2586/
- https://pachiseven.jp/machines/6216/cutout/2
- https://p.hisshobon.jp/machine/3585/1/80396
- https://p.hisshobon.jp/machine/3585/1/80728
- https://slotjin.com/tenjoukitaichi/biohazard7/
- https://ichikatsu.com/biohazard7/

### 群監査 / 境界
- https://1geki.jp/newmachinecalender/202102/
