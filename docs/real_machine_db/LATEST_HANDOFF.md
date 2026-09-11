更新日: 2026-09-12

## 現在地点
- recordCount: **1396**
- latestRecordAdded: **パチスロ青の祓魔師 — No.1396**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-03-08_ao-no-exorcist.md`
- chronologicalFrontier: **2021-03-08**
- frontierLatestMachine: **パチスロ青の祓魔師 — No.1396**
- schema: **resetBehavior v0.7**
- status: **2021-03-08_GROUP_OPEN_2_OF_6_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコードを再取得して開始。
- `INDEX.md` は旧表示（19件）のため、README規定どおり最新handoffとmain実レコードを正本として進捗判定。
- mainはNo.1395「パチスロ北斗の拳 宿命」まで進行済みだったため、固定キュー次機種の **No.1396「パチスロ青の祓魔師」** から重複せず継続。
- 性能コア + resetBehavior v0.7を収集し、No.1396を追加。
- 遡及resetBehavior QAカーソルは今回動かさず、次回 `2007-05_sashiba-e30.md`（SASHIBA / サシバE-30）から継続。

## No.1396 — パチスロ青の祓魔師
- path: `docs/real_machine_db/machines/2021-03-08_ao-no-exorcist.md`
- manufacturer: **オリンピア**
- formalModel: **Sパチスロ青の祓魔師L1**
- certificationNumber: **9S1717**
- releaseDate: **2021-03-08**
- generation/system: **6.1号機 / AT / 規定ゲーム数CZ・AT直撃 / 高純増自力継続型AT**
- payoutRateBySetting: **97.6 / 99.0 / 100.1 / 101.8 / 104.1 / 107.0%**
- CZ初当たり: **1/518.7 / 489.1 / 464.4 / 451.1 / 447.8 / 366.2**
- AT初当たり: **1/1090.6 / 919.3 / 806.4 / 696.6 / 590.9 / 342.4**
- baseGamesPer50: **設定1約51.5G（設定1〜6約51.5〜52.2G）**
- netIncrease: **AT約9.0枚/G**
- basicPayout: **無敵ZONE初期ベルナビ10/15/20回→自力ZONE、自力継続型。BIGはベルナビ30回**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_PUBLIC_MODE_TABLE_AND_MEMORIAL_START**

### resetBehavior v0.7 — No.1396
- 設定変更: **天井RESET / 内部モード再抽選 / 有利区間RESET・ランプ消灯**。
- 据え置き: **天井・内部モード・有利区間CARRY_OVER**。
- 純電断: **天井・内部モード・有利区間CARRY_OVER**。
- 通常A/B天井は **666G+α**、天国は **350G+α**。CZ/AT後の有利区間引継ぎ専用モードも最大350G+α。
- 有利区間移行時の実質モード選択率（通常A / 通常B / 天国）は、設定1 **78.91 / 15.82 / 5.27%**、設定6 **1.17 / 1.16 / 97.67%**。これは設定変更専用表ではなく新規有利区間開始時の共通初期モード表として保存。
- 設定変更時はポイント獲得特化ゾーン **メモリアルステージ（15G）** が突入契機に含まれる。突入率/ループ率は固定公開値を確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常時は基本的に有利区間ランプ消灯型のため、朝一消灯だけでは変更判別不可。朝一点灯なら据え置き+前日有利区間引継ぎ状態が濃厚。
- 液晶開始ステージ、本機固有ガックン条件/発生率、祓魔力・マイスターポイント個別の据え置き/電断時完全引継ぎ契約は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- パチ7概要の「600GでCZ」と詳細解析の「通常A/B最大666G+α」が競合。HAZUSE・1geki・なな徹・必勝本の詳細解析複数一致をcanonicalとし、600G表記は `CONFLICT_SUMMARY_DISPLAY`。

## 2021-03-08群 — OPEN
固定キュー:
1. **パチスロ北斗の拳 宿命 — No.1395 / DONE**
2. **パチスロ青の祓魔師 — No.1396 / DONE**
3. **パチスロラブ嬢2プラス — NEXT / No.1397候補**
4. **パチスロ アイドルマスター ミリオンライブ！**
5. **ワンチャンス1000**
6. **ミスタートリプルクラウン（SトリプルクラウンDX-30 / 沖縄地域流通）**

- status: **2021-03-08_GROUP_OPEN_2_OF_6_KNOWN_PROCESSED**。
- 6機処理後、全メーカー・別型式・PB・地域差・延期/段階導入を再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、同じ2021-03-08群の **No.1397候補「パチスロラブ嬢2プラス」** から継続。
- 性能コア + resetBehavior v0.7を同時収集。設定変更/据え置き/純電断、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を優先確認する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05-13_urusei-yatsura.md`（うる星やつら）。
- 今回は本線を優先したためカーソル未移動。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_sashiba-e30.md`（SASHIBA / サシバE-30）**。

## GitHub保存
- No.1395追加 commit: `a51b8a308b8e86bfc75dc5a0542557e71dcf3c51`
- No.1396追加 commit: `2e77b11e4e6f37675e584e7e682c8e46f6ac7a64`

## 主要出典 — 取得日 2026-09-12
### No.1396 青の祓魔師
- https://hazuse.com/machine/pachislot/9S1717/
- https://www.yugitsushin.jp/news/maker/20210114-0941/
- https://1geki.jp/slot/s_aoex/
- https://1geki.jp/slot/s_aoex/40/
- https://1geki.jp/slot/s_aoex/81/
- https://nana-press.com/kaiseki/machine/111/
- https://nana-press.com/kaiseki/machine/111/3290/
- https://pachiseven.jp/machines_v2/6234
- https://slotjin.com/tenjoukitaichi/exorcist/
- https://www.p-world.co.jp/machine/database/9318
