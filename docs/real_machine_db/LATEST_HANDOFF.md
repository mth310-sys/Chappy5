更新日: 2026-09-12

## 現在地点
- recordCount: **1387**
- latestRecordAdded: **S Lucky海物語 — No.1387**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-01-12_s-lucky-umi-monogatari.md`
- chronologicalFrontier: **2021-01-12**
- frontierLatestMachine: **S Lucky海物語 — No.1387**
- schema: **resetBehavior v0.7**
- status: **2021-01-12_GROUP_OPEN_5_OF_7_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1386「戦国乙女3～天剣を継ぐもの～」を再取得して開始。
- `INDEX.md` は旧表示のため、README規定どおり最新handoffとmain実レコードを正本として進捗を判定。
- handoff指定の次機種 **No.1387「S Lucky海物語」**を追加。
- 遡及resetBehavior QAは今回本線を優先し、カーソルを進めていない。

## No.1387 — S Lucky海物語
- path: `docs/real_machine_db/machines/2021-01-12_s-lucky-umi-monogatari.md`
- manufacturer: **三洋物産**
- formalModel: **SLucky海物語KH**
- certificationNumber: **0S0887**
- releaseDate: **2021-01-12**
- generation/system: **6号機 / ノーマル / ボーナス主体・告知タイプ**
- payoutRateBySetting: **97.8 / 98.7 / 99.8 / 103.0 / 106.5 / 109.7%**
- BIG: **1/284.9 / 292.6 / 273.1 / 280.1 / 246.4 / 246.4**
- REG: **1/420.1 / 344.9 / 404.5 / 292.6 / 318.1 / 250.1**
- bonusCombined: **1/169.8 / 158.3 / 163.0 / 143.1 / 138.8 / 124.1**
- baseGamesPer50: **約41.4G（設定1）**
- basicPayout: **BIG約260枚 / REG91枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_NO_CEILING**

### resetBehavior v0.7 — No.1387
- 天井: **非搭載**。設定変更時の短縮天井・ゲーム数天井RESET/CARRYは `NOT_APPLICABLE`。
- 朝一演出モード: **設定変更=ラッキーモード / 電断のみ=ラッキーモード**。よって演出モード単独では変更判別不可。
- Lucky/海モードはプレイヤー選択の演出モードであり、規定G数や当選率を管理する内部モードとは分離。
- 据え置き/純電断で追うAT天井・CZ状態・規定G数モードは本機ゲーム性上 `NOT_APPLICABLE`。
- 有利区間ランプ・区間ゲーム数を使う本機固有の朝一判別契約は直接資料を固定できず、一般的6号機知識から補完しない。
- ボーナス後100G以内BIGの楽曲変化は存在するが、朝一の楽曲状態を利用した設定変更/据え置き判別可否は当時資料で「調査中」。後発高信頼資料でも確定条件を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン条件/率も検索語・資料系統変更後に直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 公開された設定変更専用の天井短縮・高確・モード振り分け・朝一当選率・恩恵発生率は確認なし。

## 2021-01-12群監査 — OPEN
固定キュー:
1. **パチスロ頭文字D — No.1383 / DONE**
2. **パチスロ花の慶次～武威 — No.1384 / DONE**
3. **麻雀格闘倶楽部 真 — No.1385 / DONE**
4. **戦国乙女3～天剣を継ぐもの～ — No.1386 / DONE**
5. **S Lucky海物語 — No.1387 / DONE**
6. **ニューハナハナゴールド-30 — NEXT / No.1388候補**
7. **南国育ち-30 — PENDING**

- 2021年1月12日導入群には上記2機の未処理が残るためCLOSEDにしない。
- 7機完了後、同日全メーカー・別型式・別スペック・地域差・段階導入を再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、**2021-01-12群OPEN**を継続。
- 次の未処理: **ニューハナハナゴールド-30 — No.1388候補**。
- その次: **南国育ち-30 — No.1389候補**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-04-08_super-bomb.md`（スーパーボム）。
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**。
- 性能側 `coreStatus: PARTIAL` は維持。
- 次回遡及QAカーソルは **`docs/real_machine_db/machines/2007-05-13_urusei-yatsura.md`（うる星やつら）**。

## GitHub保存
- No.1387追加 commit: `e8dba52e3efb3b8d4017efeae49ebb85d9406192`

## 主要出典 — 取得日 2026-09-12
### No.1387 S Lucky海物語
- https://hazuse.com/machine/pachislot/0S0887/
- https://hazuse.com/machine/pachislot/0S0887/genre/203/
- https://hazuse.com/machine/pachislot/0S0887/genre/208/
- https://www.pachibee.jp/machines/index/220110004
- https://hisshobon.news/uncategorized/3210/
- https://1geki.jp/slot/s_luckyumi/
- https://1geki.jp/slot/s_luckyumi/1/
- https://1geki.jp/slot/s_luckyumi/4/
- https://p-kn.com/slot/3505/
- https://pachiseven.jp/machines/6183/cutout/3
- https://www.amusement-japan.co.jp/article/detail/10001988/
- https://news.p-world.co.jp/articles/14976/amusement
- https://www.pidea.jp/articles/1604308101
