更新日: 2026-09-12

## 現在地点
- recordCount: **1386**
- latestRecordAdded: **戦国乙女3～天剣を継ぐもの～ — No.1386**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-01-12_sengoku-otome-3-tenken-o-tsugu-mono.md`
- chronologicalFrontier: **2021-01-12**
- frontierLatestMachine: **戦国乙女3～天剣を継ぐもの～ — No.1386**
- schema: **resetBehavior v0.7**
- status: **2021-01-12_GROUP_OPEN_4_OF_7_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1385「麻雀格闘倶楽部 真」を再取得して開始。
- `INDEX.md` は旧表示のため、README規定どおり最新handoffとmain実レコードを正本として進捗を判定。
- handoff指定の次機種 **No.1386「戦国乙女3～天剣を継ぐもの～」**を追加。
- 遡及resetBehavior QAは **`2007-04-08_super-bomb.md`（スーパーボム）**を再探索し、性能側 `coreStatus: PARTIAL` を維持したままreset側だけ `PARTIAL_RESEARCH_EXHAUSTED` へ正式化。

## No.1386 — 戦国乙女3～天剣を継ぐもの～
- path: `docs/real_machine_db/machines/2021-01-12_sengoku-otome-3-tenken-o-tsugu-mono.md`
- manufacturer: **オリンピア（平和系）**
- formalModel: **S戦国乙女3天剣を継ぐものH3**
- certificationNumber: **9S1639**
- releaseDate: **2021-01-12**
- generation/system: **6.1号機 / AT / 差枚数管理型**
- payoutRateBySetting: **97.7 / 99.0 / 100.1 / 104.7 / 108.5 / 112.5%**
- initialHitBySetting: **1/758.9 / 648.3 / 551.6 / 419.8 / 322.5 / 282.0**
- baseGamesPer50: **約51.5G**
- netIncrease: **AT「天剣乱舞」約8.5枚/G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_EMPIRICAL_ZONE_BENEFIT**

### resetBehavior v0.7 — No.1386
- 設定変更: **有利区間RESET / 天井RESET / 出陣ポイント内部500pt開始**。
- 有利区間開始時の内部状態: **低確セット**とHAZUSE解析で確認。
- 据え置き/純電断: **有利区間・天井・出陣ポイントCARRY_OVER**。
- 通常最大天井: **約999G**。モード別は通常999G / チャンス699G / 特殊399G / 天国199G / 鬼神999G。
- 固定の設定変更専用短縮天井: **確認なし**。
- 公開朝一数値: **設定変更時は出陣ポイント内部500pt**。1000pt到達時の初回アイコンは赤66.8% / 金33.2%だが、これは初回アイコン一般抽選値であり設定変更専用振り分けとは分離。
- リセット後300G・600G付近の当選率優遇は期待値/実戦値系資料で確認。ただし固定公開率は未確認のため `EMPIRICAL_RESET_ZONE_BENEFIT_NO_FIXED_PUBLIC_RATE`。
- 変更判別: 通常時有利区間ランプ点灯型。朝一消灯=設定変更濃厚 / 点灯=据え置き濃厚。ただし前日消灯閉店や店側対策で判別不能。
- 本機固有ガックン条件/率、設定変更専用モード振り分け率は再探索後も未固定。
- 初期1gekiの設定変更ページは天井/状態/ステージを「調査中」とするが、後年HAZUSE・パチマガスロマガ等はRESET/CARRY比較を直接掲載。数値競合ではなく情報充足時点差として保持。

## 2021-01-12群監査 — OPEN
固定キュー:
1. **パチスロ頭文字D — No.1383 / DONE**
2. **パチスロ花の慶次～武威 — No.1384 / DONE**
3. **麻雀格闘倶楽部 真 — No.1385 / DONE**
4. **戦国乙女3～天剣を継ぐもの～ — No.1386 / DONE**
5. **S Lucky海物語 — NEXT / No.1387候補**
6. **ニューハナハナゴールド-30 — PENDING**
7. **南国育ち-30 — PENDING**

- 2021年1月12日導入群には上記の未処理機が残るためCLOSEDにしない。
- 7機完了後、同日全メーカー・別型式・地域差・段階導入を再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、**2021-01-12群OPEN**を継続。
- 次の未処理: **S Lucky海物語 — No.1387候補**。
- 以後: **ニューハナハナゴールド-30 → 南国育ち-30**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理済み: `docs/real_machine_db/machines/2007-04-08_super-bomb.md`（スーパーボム）。
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**。
- 性能側 `coreStatus: PARTIAL` は維持。
- ボンバーチャンス/ボンバーゾーン/成立済みボーナス状態の設定変更・据え置き・純電断契約、ガックン等は資料系統を変えても本機固有の直接契約を固定できず、一般的5号機挙動から補完しない。
- Git追加順を履歴で確認し、次回遡及QAカーソルは **`docs/real_machine_db/machines/2007-05-13_urusei-yatsura.md`（うる星やつら）**。

## GitHub保存
- No.1386追加 commit: `3269251f59725277e86e1c63eac754c2e3424192`
- スーパーボム resetBehavior QA commit: `d725e375a890f731780dabdf3dc5b2b27e62f3aa`

## 主要出典 — 取得日 2026-09-12
### No.1386 戦国乙女3～天剣を継ぐもの～
- https://hazuse.com/machine/pachislot/9S1639/
- https://hazuse.com/machine/pachislot/9S1639/genre/207/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/45/kr01.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/45/tj03.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/45/tj08.php
- https://1geki.jp/slot/s_otome3/
- https://1geki.jp/slot/s_otome3/3/
- https://nana-press.com/kaiseki/machine/98/2688/
- https://nana-press.com/kaiseki/machine/98/2693/
- https://ichikatsu.com/otome3tenken/
- https://slotjin.com/tenjoukitaichi/sengokuotome3/

### 遡及QA スーパーボム
- https://news.p-world.co.jp/articles/2097/greenbelt
- https://pacnk.com/slot/tools/sh_supabomu.html
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/11/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/11/c.php
- https://5goki.com/snkplaymore
