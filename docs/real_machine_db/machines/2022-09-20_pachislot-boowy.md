# パチスロBOØWY

recordNo: 1522
machineName: パチスロBOØWY
manufacturer: ディ・ライト（製造） / フィールズ（総販売元）
formalModel: SパチスロBOOWY SV
inspectionCode: 2S0625
releaseDate: 2022-09-20
generation: 6.5号機
systemType: セット継続型AT / 上位AT搭載

## payoutRateBySetting
- 設定L: 公開確定値未確認
- 設定1: 97.0%
- 設定2: 98.9%
- 設定4: 104.2%
- 設定5: 108.6%
- 設定6: 113.0%（canonical）

HAZUSE、ちょんぼりすた、イチカツ等は113.0%系列。Greenbeltの導入記事は設定6を113.3%とするためCONFLICT保持。
設定Lはデモ画面中の下パネル消灯が公開判別要素だが、機械割は調査中扱いのため推測しない。

信頼度: INDUSTRY / ANALYSIS_HIGH / CONFLICT_SETTING6_PAYOUT

## initialHitBySetting
### AT初当り
- 設定L: UNVERIFIED
- 設定1: 1/498
- 設定2: 1/464
- 設定4: 1/377
- 設定5: 1/325
- 設定6: 1/294

複数解析資料で一致。

信頼度: ANALYSIS_HIGH

## baseGamesPer50
- 約33.6G/50枚。

Greenbelt、1geki、複数解析で一致。

信頼度: INDUSTRY / ANALYSIS_HIGH

## netIncrease
- AT「GIGS」/ 上位AT「LAST GIGS」とも約2.8枚/G。

信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- 通常AT「GIGS」: 1セット40〜100G、セットストック＋継続管理。
- GIGSは規定4 / 6 / 8セット突破で上位AT「LAST GIGS」へ。
- 上位AT「LAST GIGS」: 1セット100G、最大継続率80%。100Gで約280〜300枚相当。
- AT終了後は超天国へ移行し、100G以内のAT期待度約25%とする複数資料あり。
- BOØWY図柄揃いは設定不問1/8192で、LAST GIGSへ直結する主要トリガー。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は全役でAT直撃と内部モード昇格を抽選。
- 通常内部モードは通常 / 高確 / 超高確。AT終了後専用に超天国が存在。
- 別軸でレジェンドモードOFF/ONがあり、ON中のAT当選は上位AT濃厚。
- CZ「COUNTDOWN to GIGS」は10G継続。
- ゲーム数天井は通常時1480G+α（前兆最大32G）。到達時は上位AT「LAST GIGS」確定、かつ1/2で80%ループ選択とする解析が一致。
- 有利区間ランプ非搭載。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_UNVERIFIED_BENEFIT
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井G数RESET。
- 内部モード/状態RESET。
- 設定変更後の再セット先について、朝一専用の確定モード振り分けを直接示す高信頼公開解析は確認できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置きは天井G数・内部状態/モードを引き継ぐ扱い。
- 前日最終G数と当日G数の宵越し天井挙動は変更判別材料となる。
- メンバーアイコン、レジェンドモード等の個別低レイヤ状態まで含む網羅的な据え置き契約は、十分な再探索後も直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ONでは有利区間を引き継ぐ。
- 天井G数を引き継ぐ。
- 内部モード/状態を引き継ぐ。
- スロパチクエスト、Altema系で明示され整合。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。

### ceilingAfterReset
- 通常天井は1480G+α（前兆最大32G）。
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井到達時恩恵は上位AT「LAST GIGS」＋1/2で80%ループ選択。

### modeAfterReset
- 設定変更で通常時の内部モード/状態はRESETされることを複数解析で確認。
- ただし、再セット先（通常/高確/超高確/超天国等）の設定変更専用振り分けは公開固定値を確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 一部攻略資料・実戦系では「設定変更後もAT終了後同様に序盤当選率が高い」「超高確相当開始の可能性」とするが、高信頼解析はリセット恩恵を調査中としており、canonicalには昇格させない。

### stateAfterReset
- 設定変更: RESET。
- 据え置き/純電断: CARRY_OVER。
- 具体的な朝一再セット状態の振り分けは `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 有利区間ランプ非搭載のため、朝一ランプ判別は不可。

### resetBenefits
- 高信頼資料で確定できる設定変更専用の短縮天井・固定モード優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 実戦/攻略資料には朝一35G以内の当選率がAT後同様に高い可能性を示す記述があるが、解析未確定のため `ANALYSIS_EMPIRICAL_NOT_CANONICAL` とする。

### resetPenalties
- 設定変更により前日天井G数・内部状態を消去するため、宵越し狙いの観点では不利。
- 設定変更専用の追加冷遇抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプ非搭載のためランプ判別不可。
- 前日最終G数＋当日G数が1480G+α付近で天井挙動を示すかは据え置き/変更推測材料。
- 設定Lはデモ画面時下パネル消灯だが、これは設定L判別であり設定変更判別ではない。
- 本機固有ガックン条件/発生率、朝一液晶出目や固定ステージによる確定的判別は、機種名・型式・検定番号・メーカー・検索語を変えて再探索しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更専用の確定モード振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更専用短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常天井: 1480G+α（最大前兆32G）。

### publicMorningNumbers
- イチカツ掲載の実戦集計では「朝一1回目まで」のサンプルが総回転2,716,891G、AT5,425回、AT初当り約1/500.8、AT期待枚数689.7枚。ただし据え置き混在可能性が明記されており、設定変更専用機械仕様値ではないため `LOW_CONFIDENCE_EMPIRICAL` として分離。
- 設定変更専用の朝一35G以内/100G以内当選率について確定解析値は `UNVERIFIED_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- 検索語: `パチスロBOØWY / BOOWY / SパチスロBOOWY SV / 2S0625 / D-light / ディ・ライト / フィールズ / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / モード / 状態 / 超高確 / 超天国 / レジェンドモード / ガックン / 有利区間 / 宵越し`。
- Greenbelt/P-WORLD、HAZUSE、1geki、なな徹、スロパチクエスト、ちょんぼりすた、イチカツ、Altema、当時実戦記事を横断。
- 設定変更/電源OFF→ONの有利区間・天井・内部モードのRESET/CARRY_OVERは複数資料で整合。
- 設定変更後の優遇状態は資料の確度差が大きいため、調査中資料を優先して確定扱いせずUNVERIFIED/EMPIRICALに分離。

## conflicts
- 設定6機械割: HAZUSE、ちょんぼりすた、イチカツ等は113.0%。Greenbelt導入記事は113.3%。平均せず `CONFLICT` とし、複数解析一致の113.0%をcanonical。設定1〜5は主系列一致。
- リセット後状態: 一部攻略/実戦系はAT終了後同様の序盤優遇・超高確相当を示唆する一方、スロパチクエストの機種個別解析ではリセット後恩恵を「調査中」としている。確定仕様に昇格せず `CONFLICT_OF_EVIDENCE_STRENGTH` として保持。

## missingFields
- 設定Lの確定機械割・AT初当り
- 設定変更時の内部モード/状態再セット振り分け
- 設定変更専用の朝一35G/100G以内AT当選率
- メンバーアイコン、レジェンドモード等の据え置き/純電断個別契約
- 本機固有ガックン条件/発生率

## sources
取得日: 2026-09-13

1. Greenbelt / P-WORLD — 9/20新台 パチスロBOØWY
   - https://news.p-world.co.jp/articles/21728/greenbelt
   - 2022-09-20導入、6.5号機、AT純増2.8枚/G、GIGS 40〜100G、LAST GIGS 100G/最大80%、AT1/498〜1/294、33.6G/50枚、出玉率97.0〜113.3%、AT後超天国100G以内約25%を確認。
   - reliability: INDUSTRY
2. Greenbelt / P-WORLD — 検定通過
   - https://news.p-world.co.jp/articles/21194/greenbelt
   - 型式 `SパチスロBOOWY SV` を確認。
   - reliability: INDUSTRY
3. HAZUSE — パチスロBOØWY
   - https://hazuse.com/machine/pachislot/2S0625/
   - 型式、検定番号2S0625、導入日、設定別機械割97.0/98.9/104.2/108.6/113.0%、設定L、内部モード、AT仕様を確認。
   - reliability: ANALYSIS_HIGH / INDUSTRY_DB
4. 1geki — BOØWY解析
   - https://1geki.jp/slot/s_boowy/
   - https://1geki.jp/slot/s_boowy/4/
   - https://1geki.jp/slot/s_boowy/82/
   - 33.6G/50枚、通常/高確/超高確、GIGS 40〜100G、LAST GIGS等を確認。
   - reliability: ANALYSIS_HIGH
5. なな徹 — GIGS / LAST GIGS / 天井
   - https://nana-press.com/kaiseki/machine/421/11607/
   - https://nana-press.com/kaiseki/machine/421/11609/
   - https://nana-press.com/kaiseki/machine/421/11589/
   - AT純増2.8枚/G、セット性能、1480G+α天井、天井恩恵を確認。
   - reliability: ANALYSIS_HIGH
6. スロパチクエスト — 天井/朝一
   - https://www.slopachi-quest.com/article/boowy-tenjou/
   - 設定変更で有利区間/天井/内部モードRESET、電源OFF→ONで各引継ぎ、リセット恩恵は調査中を確認。
   - reliability: ANALYSIS_HIGH
7. ちょんぼりすた — BOØWY解析
   - https://chonborista.com/slot/d-light/171041/
   - 設定別AT/機械割113.0%系列、33.6G、1480G+α天井、AT後超天国を確認。
   - reliability: ANALYSIS_HIGH
8. Altema — リセット挙動
   - https://altema.jp/pachimo/boowy
   - 設定変更時天井/状態RESET、電源ON/OFF時引継ぎ、有利区間ランプ非搭載、据え置き判別材料を確認。
   - reliability: ANALYSIS_SINGLE
9. イチカツ — BOØWY
   - https://ichikatsu.com/boowy/
   - 設定別AT/機械割、33.6G/50枚、天井、朝一1回目までの実戦サンプル1/500.8、設定変更後序盤挙動の観測を確認。
   - reliability: ANALYSIS_SINGLE / EMPIRICAL

## status
coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_UNVERIFIED_BENEFIT
confidence: INDUSTRY_HIGH_CORE / ANALYSIS_HIGH_RESET_CORE / MORNING_BENEFIT_UNVERIFIED
