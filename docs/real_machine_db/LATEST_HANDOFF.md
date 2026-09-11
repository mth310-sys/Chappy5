更新日: 2026-09-11

## 現在地点
- recordCount: **1385**
- latestRecordAdded: **麻雀格闘倶楽部 真 — No.1385**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-01-12_mahjong-fight-club-shin.md`
- chronologicalFrontier: **2021-01-12**
- frontierLatestMachine: **麻雀格闘倶楽部 真 — No.1385**
- schema: **resetBehavior v0.7**
- status: **2021-01-12_GROUP_OPEN_3_OF_7_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1384「パチスロ花の慶次～武威」を再取得して開始。
- `INDEX.md` は旧表示（19件）のため、README規定どおり最新handoffとmain実レコードを正本として進捗を判定。
- handoff指定の次機種 **No.1385「麻雀格闘倶楽部 真」**を追加。

## No.1385 — 麻雀格闘倶楽部 真
- path: `docs/real_machine_db/machines/2021-01-12_mahjong-fight-club-shin.md`
- manufacturer: **コナミアミューズメント**
- formalModel: **S麻雀格闘倶楽部真KS**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2021-01-12**
- generation/system: **6.1号機 / AT / 差枚数管理型疑似ボーナス+上位AT**
- payoutRateBySetting: **97.9 / 98.9 / 100.3 / 104.1 / 106.2 / 108.5%**
- initialHitBySetting: **1/329.3 / 319.5 / 310.3 / 290.0 / 268.7 / 245.5**
- baseGamesPer50: **約49.8G**
- netIncrease: **格闘倶楽部BONUS約5.0枚/G / 真格闘倶楽部RUSH約3.0枚/G**
- basicPayout: **格闘倶楽部BONUS最大480枚+α / 真格闘倶楽部RUSH期待獲得約1400枚 / 麒麟降臨期待獲得約2000枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_UNVERIFIED_DETAILS**

### resetBehavior v0.7 — No.1385
- 設定変更: **天井RESET / 内部状態再抽選 / 有利区間RESET**。
- 据え置き/純電断: **天井・内部状態・有利区間CARRY_OVER**。
- 天井: **有利区間開始後777Gを超えた次の対局/周期到達で格闘倶楽部BONUS**。「777G」「777G+α」「777G以降の周期到達」は発動タイミングの表記差として保持。
- 固定のリセット専用短縮天井: **確認なし**。
- 変更判別: 通常時の有利区間ランプは消灯型のため、**朝一消灯だけでは変更/据え置き判別不可**。筐体ゲーム数の前日値引継ぎは補助材料だが確定条件ではない。
- 設定変更専用のモード振り分け、内部状態確率付き初期表、朝一当選率などの公開数値は再探索後も固定できず `NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH`。
- 本機固有ガックン条件/発生率、検定番号も高信頼の直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

## 2021-01-12群監査 — OPEN
固定キュー:
1. **パチスロ頭文字D — No.1383 / DONE**
2. **パチスロ花の慶次～武威 — No.1384 / DONE**
3. **麻雀格闘倶楽部 真 — No.1385 / DONE**
4. **戦国乙女3～天剣を継ぐもの～ — NEXT / No.1386候補**
5. **S Lucky海物語 — PENDING**
6. **ニューハナハナゴールド-30 — PENDING**
7. **南国育ち-30 — PENDING**

- 7機完了後、1/12同日全メーカー・別型式・地域差・段階導入を再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、**2021-01-12群OPEN**を継続。
- 次の未処理: **戦国乙女3～天剣を継ぐもの～ — No.1386候補**。
- 以後: **S Lucky海物語 → ニューハナハナゴールド-30 → 南国育ち-30**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線No.1385を優先し、遡及レコードの更新は行っていない。
- 次回遡及QAカーソルは引き続き **`docs/real_machine_db/machines/2007-04-08_super-bomb.md`（スーパーボム）**。

## GitHub保存
- No.1385追加 commit: `c0bce1a2de2c10bbb452ade733a03e335f157f54`

## 主要出典 — 取得日 2026-09-11
### No.1385 麻雀格闘倶楽部 真
- https://www.youtube.com/watch?v=-4wEzGovZEs
- https://www.konami.com/amusement/psm/portal/magihallo/magiotsu_23/20210115.html
- https://www.pachibee.jp/machines/index/220110002
- https://p-kn.com/slot/3510/
- https://1geki.jp/slot/s_mfc_shin/
- https://hisshobon.news/uncategorized/3220/
- https://www.p-world.co.jp/machine/database/9281
- https://ichikatsu.com/mfcshin/
- https://slotjin.com/tenjoukitaichi/mfc-shin/
- https://nana-press.com/kaiseki/machine/100/2553/
- https://slothankey.com/設定キー/s麻雀格闘倶楽部真ks-設定キー-初期設定/
- https://tanigyannburu.fc2.net/blog-entry-1119.html
