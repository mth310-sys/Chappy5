更新日: 2026-09-11

## 現在地点
- recordCount: **1304**
- latestRecordAdded: **パチスロ TIGER & BUNNY — No.1304**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-09-02_pachislot-tiger-and-bunny.md`
- chronologicalFrontier: **2019-09-02**
- frontierLatestMachine: **パチスロ TIGER & BUNNY — No.1304**
- schema: **resetBehavior v0.7**
- status: **2019_09_02_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧スナップショットの `INDEX.md`、`LATEST_HANDOFF.md`、直前実レコードを再取得して開始。
- 並行更新で No.1302 `OVER-SLOT「AINZ OOAL GOWN絶対支配者光臨」` と2019-08-19群CLOSEDが先行していたため、上書きせず最新mainへ再同期。
- No.1303 **`SLOT劇場版魔法少女まどか☆マギカ[新編]叛逆の物語`** を登録。
- No.1304 **`パチスロ TIGER & BUNNY`** を登録し、追加再探索で2019年版そのものの内部状態RESET/CARRY_OVER資料を取得して補正済み。
- モゲスロ、2019年導入カレンダー、複数個別解析を横断し、2019-09-02パチスロ群は `叛逆の物語 / TIGER & BUNNY` の2機種で一致したため **CLOSED**。
- 既存性能値の再調査は行わず、新規2機種の性能コアとv0.7 resetBehaviorのみ収集。

## No.1303 — SLOT劇場版魔法少女まどか☆マギカ[新編]叛逆の物語
- manufacturer: **メーシー**
- formalModel: **`S／叛逆の物語／FH`**
- certificationNumber: **`9S0698`**
- releaseDate: **2019-09-02**
- generation/system: **6号機 / 疑似ボーナス + 差枚数管理AT**
- payout: **97.3 / 98.3 / 100.2 / 103.5 / 106.3 / 111.5%**
- Magica Bonus: **1/285.8 / 259.6 / 255.1 / 253.9 / 244.5 / 214.4**
- Episode Bonus: **1/7221.0 / 7316.4 / 6928.2 / 5780.6 / 5307.4 / 3640.4**
- AT初当たり: **1/543.0 / 464.8 / 418.2 / 389.1 / 364.1 / 289.5**
- baseGamesPer50: **約50G/50枚**（資料に約50.6〜50.9G級の詳細値あり）
- netIncrease: **約3.0枚/G**（公式）
- basicPayout: **マギカ20G約60枚 / エピソード40G約120枚**
- 最大天井: **有利区間移行後699G → マギカボーナス**

### resetBehavior v0.7 — No.1303
- settingChange: **天井RESET / 内部状態RESET / 非有利区間開始 / 有利区間移行時にモード再抽選**。
- carryOver/powerCycle: **天井 / 内部状態 / 内部モード CARRY_OVER**。
- advantageousSection: 設定変更後は非有利区間から始まり、実戦解析では基本1〜2Gで有利区間へ移行。通常時ランプ常時消灯のため判別不可。
- resetBenefits: 非有利区間中のみレア役でAT直撃機会あり。ただし約2000万Gの比較では通常時とリセット後に大きな差なし。
- resetDetection: 有利区間ランプ / ガックン不可。81〜100 / 281〜300 / 481〜500Gの解除、当日100 / 400 / 600Gでの穢れ吸い込み等は実戦上の推測材料で確定条件ではない。
- publicMorningNumbers: 新台初日1回目初当たり **1995件中12件**で朝一即AT直撃（2G目10件 / 3G目2件、約0.60%）。メーカー値ではなく `EMPIRICAL_ANALYSIS_SINGLE`。
- conflict: 設定5マギカボーナス **1/244.5 vs 1/244.4**。平均せず1/244.5をcanonical、丸め差CONFLICT保持。

## No.1304 — パチスロ TIGER & BUNNY
- manufacturer: **山佐**
- formalModel: **`Sパチスロタイガー＆バニーHZ`**
- certificationNumber: **`9S0603`**
- releaseDate: **2019-09-02**
- generation/system: **6号機 / AT×疑似ボーナス / 純増変動型**
- payout: **97.9 / 99.2 / 101.1 / 103.5 / 106.5 / 110.2%**
- bonus合算: **1/229.8 / 220.1 / 203.7 / 189.7 / 170.3 / 157.7**
- AT初当たり: **1/684.7 / 621.0 / 502.5 / 448.4 / 368.7 / 331.5**
- baseGamesPer50: **50.5 / 50.5 / 50.5 / 50.7 / 51.0 / 51.5G**
- netIncrease: **AT純増1 / 2 / 4枚/G、最高約4.0枚/G**
- basicPayout: **BIG平均126枚 / BLUE ROSE LIVE平均150枚 / REG平均53枚 / EPISODE平均103枚**
- AT basic: **1セット30G+α**
- 最大天井: **666G+α、BIG以上**

### resetBehavior v0.7 — No.1304
- settingChange: 機種固有2019年版資料で **天井RESET / 内部状態RESET / 有利区間RESET**。
- powerCycle/carryOver: **天井 / 内部状態 / 有利区間 CARRY_OVER**。
- modeAfterReset: 2019年版の設定変更/純電断時内部モード直接契約は、表記揺れ・型式・メーカー・シリーズ名まで変えて再探索後も `UNVERIFIED_AFTER_RESEARCH`。2022年SPのRESET表は別型式のため転記しない。
- advantageousSection: 通常時ランプ常時消灯で変更判別不可。
- resetBenefits: 設定変更専用短縮天井 / 朝一高確 / 専用優遇率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン発生条件/率/確定性は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- publicMorningNumbers: 設定変更専用の比較可能な確定数値は `NONE_CONFIRMED_AFTER_RESEARCH`。通常時の111/333/666G天井振り分けを朝一専用値へ流用しない。

## 2019-09-02群 — CLOSED
1. **SLOT劇場版魔法少女まどか☆マギカ[新編]叛逆の物語** — No.1303。
2. **パチスロ TIGER & BUNNY** — No.1304。

モゲスロ2019年導入日カレンダー、パチンコ・パチスロ.com 2019新台カレンダー、個別解析で同日スロット2機種が一致。別型式 / 別スペック / 後継SPを混同しない。

## 2019-08-19群 — CLOSED
- No.1300 花娘
- No.1301 どき！すろ
- No.1302 OVER-SLOT「AINZ OOAL GOWN絶対支配者光臨」

## Sオリスロ2AA 系列 — 継続監査
1. SLOT WONDER AGENT — 2019-07-08 / No.1298 / 登録済み。
2. BELLE CITY — 2019-08-05 / No.1299 / 登録済み。
3. 花娘 — 2019-08-19 / No.1300 / 登録済み。
4. どき！すろ — 2019-08-19 / No.1301 / 登録済み。
5. タマどき！ — 9〜10月候補、未登録。
6. プレドキ！ — 導入法人・時期・独立レコード要否の監査継続、未登録。

## 2019-08-05群 — REOPENED / NOT CLOSED
- No.1293 パチスロあの日見た花の名前を僕達はまだ知らない。
- No.1294 麻雀格闘倶楽部参
- No.1295 パチスロ 天元突破グレンラガン
- No.1296 ハイハイシオサイ
- No.1297 バンバンクロス
- No.1299 BELLE CITY
- Sオリスロ2AA系列の遡及補完継続中のため最終CLOSED判定は保留。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: `docs/real_machine_db/machines/2007-03-11_treasure-pirates.md`
- latestFormalized: `docs/real_machine_db/machines/2007-02_skylove.md`
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: **`docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md`（革命戦士長州力）**。既QAなら次のGit追加順へ進み、reset欠損/旧形式なら性能コアを崩さずreset側だけ補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1303 / No.1304 を再取得。
2. 次の時系列境界 **2019-09-03〜09-16** を再監査。
3. 次の既知導入群 **2019-09-17** を処理。候補は **`パチスロ ラブ嬢2`（オリンピア）No.1305候補 → `スーパービンゴギャラクシー`（ベルコ）No.1306候補**。
4. 全メーカー / 別型式 / 別スペック / PB / 地域差を監査して9/17群CLOSED可否を判定。
5. 遡及QAは **革命戦士長州力** から再開。
6. Sオリスロ2AA `タマどき！ / プレドキ！` は時系列到達時または遡及監査で必ず回収する。

## 主要出典 — 取得日 2026-09-11
### No.1303
- ユニバーサル公式: https://www.universal-777.com/product/slot/mmh/
- HAZUSE: https://hazuse.com/machine/pachislot/9S0232/
- K-Navi: https://p-kn.com/slot/3267/
- 期待値見える化: https://slotjin.com/slot/madomagi-h-reset/
- おスロおパチおいでやす: https://oslo-opachi.com/2019/06/19/madomagi3_tennjou/

### No.1304
- 山佐ネクスト公式: https://yamasa-next.co.jp/model_tab/
- HAZUSE: https://hazuse.com/machine/pachislot/9S0603/
- パチ7: https://pachiseven.jp/machines/5834/cutout/3
- おスロおパチおいでやす: https://oslo-opachi.com/2019/09/02/tigerandbunny-tennjou/
- スロパチネット: https://slopachi-net.com/tiger-bunny
- すろぱちくえすと: https://www.slopachi-quest.com/article/tiger-and-bunny-tennjou/
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/11434/yugitsushin

### 2019-09-02群監査
- モゲスロ2019導入日カレンダー: https://moge-site.com/new-slot2019
- パチンコ・パチスロ.com 2019新台カレンダー: https://pachinkopachisro.com/archives/52807194.html
- すろぱちくえすと2019導入機種: https://www.slopachi-quest.com/article/2019-dounyuukishu/
