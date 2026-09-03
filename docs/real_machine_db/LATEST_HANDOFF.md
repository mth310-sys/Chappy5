# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **497**
- latestMachineAdded: **お座敷の茶々**（バルテック / 2010-07-05）
- latestRecord: `docs/real_machine_db/machines/2010-07-05_ozashiki-no-chacha.md`
- chronologicalFrontier: **2010-07-05**
- frontierLatestMachine: **お座敷の茶々**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線実レコード496「トップをねらえ2!」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時の最新mainは recordCount **496** / chronologicalFrontier **2010-07-05**。
- LATEST_HANDOFF指定の同日未処理候補 **「お座敷の茶々」**をrepo検索し未登録を確認。
- K-Navi 2010年7月導入カレンダーで2010-07-05の全国導入パチスロ群は「トップをねらえ2!」「お座敷の茶々」。前者は496で登録済みのため、本機を497件目として追加。

## 497 — お座敷の茶々 要約

- メーカー: **バルテック**
- 型式名: **オザシキノチャチャ**
- 検定番号: **0S0189**
- 導入主値: **2010-07-05**。K-Navi全国一斉導入開始日。バルテック公式・5号機クロニクルの2010年7月月粒度とも整合。
- 世代/タイプ: **5号機 / A+ART / 押し順ART / CZ / 継続率管理ART + ストック型SUPER ART**
- 機械割: **97.3 / 98.6 / 99.7 / 103.2 / 106.8 / 113.4%**。P-WORLD、pacnk、5号機クロニクル、当時パチマガスロマガで一致。
- ボーナス合成: **1/167.1 / 1/163.8 / 1/160.6 / 1/157.5 / 1/151.7 / 1/146.2**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。当時パチマガスロマガ本機専用欄も「現在調査中」。
- SUPER茶々ボーナス: **約204枚**。
- 茶々ボーナス: **約78枚**。
- ART「茶々タイム」: **30G / 約+1.7枚/G / 継続率50〜90%級**。
- SUPER ART「SUPER茶々タイム」: **120G / 約+1.7枚/G / 最大3セット**、終了後は茶々タイムへ。
- 通常時は**低確/高確**。高確中ボーナス成立時のART突入率 **75%**。
- ゲーム数天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

## resetBehavior v0.7 — お座敷の茶々

- **設定変更**: P-WORLDが本機固有で、設定変更後は**ART非当選ボーナス後/ART終了後と同じ状態**となり、鈴取りこぼし目（門松・門松・鈴）からCZ「二択チャレンジ」が発生すると明記。
- **据え置き**: 低確/高確、ART継続率・SUPER ARTストック、CZ内部状態の保持/初期化を直接明記する本機固有資料は十分な再探索後も確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 設定変更と同じCZ準備状態へ移るかを含め、本機固有の直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。設定変更と単純電源再投入を同一視しない。
- **ゲーム数/天井**: 通常ゲーム数天井/周期解除の確定値なし。`NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED` / `NONE_CONFIRMED_AFTER_RESEARCH`。
- **モード/状態**: ゲーム数モード型ではない。通常時の低確/高確は確認済みだが、設定変更時の低高確初期振分は `UNVERIFIED_AFTER_RESEARCH`。設定変更直後のCZ入口状態のみ確定。
- **有利区間**: **NOT_APPLICABLE**（5号機・制度前）。
- **朝一恩恵**: 設定変更直後から、鈴こぼし目経由で二択チャレンジへ入る自力ART復帰ルートの入口を持つ。
- **朝一不利**: ゲーム数天井進捗喪失は天井未確認のため該当させない。前日高確/ARTストック消失は直接根拠がなく `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: **朝イチいきなり二択チャレンジが発生すれば設定変更濃厚**とP-WORLDが明記。本機固有の強い判別材料。ガックン/初期出目/ランプ等の追加方法は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 設定変更専用のモード振分、朝一当選率、恩恵発生率、短縮天井数値は `NONE_CONFIRMED_AFTER_RESEARCH`。高確中ボーナス時ART75%は通常状態依存値であり設定変更専用値ではない。

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済みを維持。
- 次はmainのmachine tree / commit履歴 / 2006-11〜12実レコード群から「ジャックと豆の木」直後に実在する最初の `resetBehavior` 欠損ファイルをパスで確定してから補完する。
- 新規機種の時系列前進を止めない。

## 主要出典（取得日 2026-09-03）

### お座敷の茶々
- バルテック公式: `https://www.baltec.co.jp/product/product09.html`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5980`
- K-Navi 2010年7月導入カレンダー: `https://p-kn.com/calendar/201007/`
- pacnk: `https://pacnk.com/slot/2010/ozashikichacha/top.php`
- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/53/a.php`
- パチマガスロマガ PAYOUT/合成: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/53/h.php`
- パチマガスロマガ 1000円ゲーム数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/53/c.php`
- 5号機クロニクル バルテック一覧: `https://5goki.com/baltec`
- Pマンズ 2010-05-21業界記事: `https://p-mans.blogspot.com/2010/05/`

## 今回のGitHub更新

- 497 お座敷の茶々追加: commit `b3ca449973cc35d82106f5c645b3fb7a538a0d26`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 497 / chronologicalFrontier 2010-07-05**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-07-05同日群はK-Navi全国導入カレンダー上「トップをねらえ2!」「お座敷の茶々」の2機種を登録済み**。別系統導入一覧でも同日/地域先行漏れを軽く再監査してから日付を前進。
3. **2010-07-06〜07-19**を、K-Navi以外の業界記事・メーカー一覧・当時解析DBでも境界監査し、月粒度/地域先行の未登録機があれば最古から追加。
4. K-Navi上の次の明確な全国導入パチスロ群は **2010-07-20「悪魔城ドラキュラII」（KPE）、「幕末浪漫 月華の剣士外伝～あかりと七つの妖珠～」（SNKプレイモア）**。repo重複確認後、未登録の最古から498件目へ進む。
5. その次は **2010-07-26「科学忍者隊ガッチャマンGR」（岡崎産業）**。ただし7/20同日群と7/21〜25境界を閉じてから進む。
6. お座敷の茶々の `baseGamesPer50`、ボーナス個別確率、据え置き/単純電源OFF→ON、低高確・ART継続率/ストックのリセット処理、追加変更判別法は後続QA対象。
