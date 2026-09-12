更新日: 2026-09-12

## 現在地点
- recordCount: **1477**
- latestRecordAdded: **BLACK LAGOON ZERO bullet MAX — No.1477**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-02-07_black-lagoon-zero-bullet-max.md`
- chronologicalFrontier: **2022-02-07**
- frontierLatestMachine: **BLACK LAGOON ZERO bullet MAX — No.1477**
- schema: **resetBehavior v0.7**
- status: **2022-02-07_GROUP_OPEN_1_OF_2_CURRENTLY_KNOWN_RECORDS_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1476「押忍！番長ZERO」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機 `BLACK LAGOON ZERO bullet MAX` をNo.1477へ追加。
- 導入日は2022-02-07。製造元エフ、開発スパイキー、総発売元フィールズ。型式 `SブラックラグーンゼロFK`、検定番号 `1S1440` を業界/旧DB資料で確認。
- 性能コアは設定1〜6の機械割97.6/98.8/100.2/104.0/107.6/110.3%、AT初当たり1/379〜1/236、ベース32.2G/50枚、AT純増約6.5枚/Gを保存。
- AT「ラグーンラッシュ」はゲーム数上乗せ型で初当たり時は必ず「ヘブンズラッシュ」から開始。AT平均獲得約590枚の導入時紹介、ラグーンボーナス20G、上位スーパーヘブンズラッシュ平均上乗せ約200Gも比較用補助値として保存。
- 通常天井は有利区間移行後777GでAT。
- resetBehavior v0.7は、設定変更時に天井/有利区間/バレットポイント/内部状態をRESET。純電源OFF→ONは天井/有利区間/ポイント/内部状態をCARRY_OVER。設定変更なしの据え置きもCARRY_OVER扱い。
- 朝一設定変更後は内部的に「バラライカゾーン」から開始する場合あり。バラライカゾーンは5G。ただし設定変更時の選択率は複数資料で「一部」「場合あり」までで、公開数値を固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 一部後年資料の「朝一内部バラライカゾーン濃厚」と、当時複数解析の「一部/場合あり」は `WORDING_CONFLICT` として保持し、canonicalは当時複数資料を優先して「一部/場合あり」。
- バラライカゾーン中は強チェリー/チャンス目/強ベル/下段リプレイで引き戻し100%という公開解析値を条件付き朝一参考値として保存。
- 有利区間ランプは通常時点灯型。朝一消灯は設定変更濃厚、点灯は据え置き/対策材料。ただし前日AT後に有利区間が切れた直後の閉店や店舗対策が例外のため「確定」扱いにはしない。一部資料の「消灯でリセット確定」は定義注意として保持。
- 本機固有の設定変更時ガックン条件/発生率、設定変更専用通常モード振り分け、内部バラライカゾーン選択率、固定開始ステージは検索語・資料系統を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH` / `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 2022-02-07群は現時点で本機と `パチスロドリフターズ` の2機を確認。No.1477処理時点では群をOPEN維持。
- 遡及resetBehavior QAは本線を優先し、前回カーソルを維持。

## No.1477 — BLACK LAGOON ZERO bullet MAX
- path: `docs/real_machine_db/machines/2022-02-07_black-lagoon-zero-bullet-max.md`
- manufacturer: **エフ / 開発: スパイキー / 総発売元: フィールズ**
- formalModel: **SブラックラグーンゼロFK**
- inspectionCode: **1S1440**
- releaseDate: **2022-02-07**
- generation/system: **6.2号機 / AT / ゲーム数上乗せ型 / バレットシステム**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.8 / 100.2 / 104.0 / 107.6 / 110.3%**
- initialHit: **AT 1/379 / 1/365 / 1/345 / 1/296 / 1/260 / 1/236**
- baseGamesPer50: **32.2G**
- netIncrease: **約6.5枚/G**
- basicPayout: **AT初当たり時はヘブンズラッシュから開始 / AT平均獲得約590枚（導入時紹介） / ラグーンボーナス20G / SHR平均上乗せ約200G**
- normalCeiling: **有利区間移行後777G → AT**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_MINOR_UNVERIFIED**
- confidence: **HIGH_CORE_HIGH_RESET_MINOR_RESET_RATE_AND_GAKKUN_UNVERIFIED**

### resetBehavior v0.7 — No.1477
- **設定変更**: 天井・有利区間・バレットポイント・内部状態RESET。朝一は内部バラライカゾーンから開始する場合あり。
- **据え置き**: 天井・有利区間・ポイント・内部状態CARRY_OVER。
- **純電源OFF→ON**: 天井・有利区間・ポイント・内部状態CARRY_OVER。
- **ゲーム数/天井**: 通常777G。固定の設定変更専用短縮天井は確認できず。
- **モード/状態**: 設定変更時は状態/ポイントRESET。設定変更専用通常モード振り分けは公開値なし。内部バラライカゾーン選択率も公開値なし。
- **有利区間**: 設定変更時RESET。通常時ランプ点灯型。AT終了後はリセット時と継続時があり、継続時は天国モード2回ループとする解析あり。
- **朝一恩恵/不利**: 一部/場合で内部バラライカゾーン5G。前日天井進行・ポイント・内部状態は設定変更で消去。
- **変更判別**: 朝一★ランプ消灯=設定変更濃厚、点灯=据え置き/対策材料。前日AT後即ヤメ・店舗対策の例外を保持。ガックンはUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: 内部バラライカゾーン選択時5G。ゾーン中の強チェリー/チャンス目/強ベル/下段リプレイはAT引き戻し解析値100%。設定変更時のゾーン選択率は未公表/未固定。

## 次回本線の再開地点
- **2022-02-07群を継続し、No.1478候補「パチスロドリフターズ」から処理。**
- 候補情報: Sammy / 型式 `S パチスロドリフターズ ZS` / 検定番号 `1S1187`。
- No.1478処理後、2022-02-07同日群に他の独立機種・PB・30Φ別型式・地域先行・延期/段階導入がないか、新台カレンダー/業界記事/メーカー別一覧で再監査してCLOSED可否を判定する。
- 性能コアとresetBehavior v0.7を同時収集する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線を優先し新規更新なし。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md`（パチスロ暴れん坊将軍）**。

## GitHub保存
- No.1477追加 commit: `66ecfafb369b3288a1d9f5bc981745618f7af716`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1477 BLACK LAGOON ZERO bullet MAX
- https://news.p-world.co.jp/articles/18949/nippon
- https://news.p-world.co.jp/articles/19070/yugitsushin
- https://news.p-world.co.jp/articles/19166/greenbelt
- https://hazuse.com/machine/pachislot/1S1440/
- https://1geki.jp/slot/s_blacklagoon_zero/
- https://nana-press.com/kaiseki/machine/294/7857/
- https://nana-press.com/kaiseki/machine/294/7853/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/f_slot/02/kr01.php
- https://www.slopachi-quest.com/article/black-lagoon-zero-bullet-max-tenjou/
- https://slot-seven.com/blacklagoonzero-tenzyou/
- https://chonborista.com/slot/spiky/159377/
- https://1geki.jp/slot/s_blacklagoon_zero/87/
- https://www.nakaiti.com/html/sEff002.html

### 次回候補 2022-02-07群
- https://hazuse.com/machine/pachislot/1S1187/genre/202/
- https://29den.com/newslot/
