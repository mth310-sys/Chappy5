# パチスロ ガールズ＆パンツァーG ～これが私の戦車道です！～

recordNo: 1291
machineName: パチスロ ガールズ＆パンツァーG ～これが私の戦車道です！～
manufacturer: オリンピア（平和グループ）
formalModel: Sガールズ＆パンツァーG/LA1
certificationNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2019-07-08
generation: 6号機
systemType: AT / CZ・周期抽選 / 自力バトル継続型

## payoutRateBySetting

| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 97.7% |
| 2 | 99.2% |
| 3 | 100.0% |
| 4 | 102.5% |
| 5 | 105.3% |
| 6 | 110.1% |

ちょんぼりすた、スロット解析.com、複数当時解析で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | AT「戦車道」初当り |
|---|---:|
| 1 | 1/461.2 |
| 2 | 1/441.7 |
| 3 | 1/433.9 |
| 4 | 1/405.0 |
| 5 | 1/379.7 |
| 6 | 1/328.5 |

複数解析資料で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 約50.4G/50枚。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「戦車道」: 約2.6枚/G。
- 平和のプレス発表会を報じたパチビー、Amusement Japanでも約2.6枚/Gを確認。

信頼度: INDUSTRY_HIGH_MULTI_SOURCE

## basicPayout

- AT「戦車道」は固定セット枚数型ではなく、敵車輌を全滅させるまで継続するゲーム数不定の自力バトル型。
- 初当り時は「パンツァーアタック」を経由し、Vストックや戦略アイテムを獲得してバトルへ移行。
- 擬似ボーナス「みほ図柄揃い」は20G。

固定の平均獲得枚数を性能コア主値としては採用しない。

## modeSpecificMinimumData

- 通常時は「あんこうカウンター」0pt到達を1周期としてCZ/ATを抽選。1周期は平均約48G。
- CZは「戦車道チャレンジ」（AT期待度40%以上）と上位CZ「あんこう祭り」（同70%）。
- ゲーム数AT天井は非搭載。
- CZ5周期連続非当選後、6周期目の周期到達でCZ当選確定。
- 有利区間終了時にCZへ移行する設計を採用。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

- settingChangeBehavior: 設定変更時は周期スルー数・周期進捗をリセット。あんこうカウンターは内部300ptから開始し、パンツァーハイ関連状態もリセット。約30.4%で内部CZから開始する。
- carryOverBehavior: 据え置きでは周期天井/あんこうカウンター/内部状態を引き継ぐ。通常時から点灯する有利区間ランプも引き継ぐ。
- powerCycleBehavior: 純電源OFF→ON（設定据え置き）は周期天井、あんこうカウンター、内部状態、有利区間および有利区間ランプを引き継ぐ。設定変更と明確に挙動が異なる。
- gameCounterReset: 設定変更時は周期スルー数をリセット。据え置き・純電断は引き継ぎ。ゲーム数天井は非搭載。
- ceilingAfterReset: 通常のCZ天井は5周期スルー後の6周期目。設定変更後、内部CZ非当選だった場合でも実戦上3周期以内にCZ当選したとの必勝本実戦資料があり、朝一の実戦上短縮要素として保持。ただしメーカー公表値ではない。
- modeAfterReset: 通常時の全モード移行表は対象外。設定変更時は周期関連状態を初期化し、内部300ptスタート。
- stateAfterReset: 設定変更時は約30.4%で内部CZ。内部CZは液晶上は通常画面のまま開始し、32Gまで継続する挙動を利用した判別手順が公開されている。据え置き/純電断は内部状態引継ぎ。
- advantageousSectionReset: 設定変更時は非有利区間へ移行し有利区間ランプ消灯。据え置き/純電断では有利区間・ランプ状態を引き継ぐ。
- resetBenefits: 設定変更時は約30.4%で内部CZスタート。内部CZ非当選時も必勝本実戦値では3周期以内にCZ当選。リセット台の朝一を狙う明確な期待値要素が存在する。
- resetPenalties: 設定変更専用の主要な不利要素は今回の主要資料で確認されず `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 朝一有利区間ランプ消灯は設定変更濃厚、点灯は据え置き濃厚。ただしホール対策等の例外があり確定ではない。朝一〜初回CZ間は液晶ゲーム数とデータ表示器のズレも変更判別材料。内部CZは設定変更後1G目の逆押しによる純正1枚役判別手順が必勝本で公開されている。
- publicMorningNumbers: 設定変更後の内部CZ開始率約30.4%。内部CZは32G。内部CZ非当選時の「3周期以内CZ」は必勝本の実戦値。内部CZ否定後からCZ当選までの期待収支+549円も同資料の実戦値であり、メーカー公表値とは区別して保持。

### resetBehavior 再探索メモ

「ガールズ＆パンツァーG / ガールズ&パンツァーG / ガルパンG / Sガールズ＆パンツァーG/LA1 / Sガールズ＆パンツァーG/L4 / オリンピア / 平和」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 周期天井 / 天井短縮 / モード / 内部CZ / ガックン / 有利区間 / 有利区間ランプ」を組み合わせて再探索。平和公式ニュース、業界プレス発表会記事、検定通過記事、当時解析、パチ＆スロ必勝本を横断し、設定変更と純電断の差、周期/カウンター、有利区間、内部CZ、朝一判別まで複数系統で固定した。

## qualityNotes / conflicts

- 導入日は多数の全国導入資料で2019-07-08。一方、ちょんぼりすた等は「一部地域7月1日先行導入」と記録し、日刊スポーツの当時導入カレンダーも7月1日として掲載。本DBでは全国本格導入の2019-07-08をcanonicalとし、`REGIONAL_EARLY_INTRODUCTION_2019-07-01` を別注記として保持する。
- 検定通過時には `Sガールズ＆パンツァーG/L4` と `Sガールズ＆パンツァーG/LA1` の両型式が確認される。市場導入カレンダー・実機流通表記ではLA1を確認できるためformalModel主値をLA1とした。L4を別販売スペックとして独立登録する根拠は今回固定できず、重複登録しない。
- 検定番号は型式名・メーカー名・検定語を変えて再探索したが、高信頼資料で番号を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- リセット内部CZ率は当時解析で30.4%、一部整理記事で「約32%」表記。丸め/概数とみなし主値30.4%を採用し、異なる厳密値として平均しない。

## sources

取得日: 2026-09-11

1. 株式会社平和 NEWS&INFORMATION 2019
   - https://www.heiwanet.co.jp/news/2019/
   - 2019-05-14に本機製品情報掲載を確認。
   - reliability: OFFICIAL
2. パチビー — 新機種プレス発表会
   - https://www.pachibee.jp/pparticles/view/1151
   - 2019-05-15平和プレス発表会、オリンピア製、6号機AT、純増2.6枚/G。
   - reliability: INDUSTRY_HIGH
3. Amusement Japan — ガルパンが6号機で堂々帰還
   - https://amusement-japan.co.jp/article/detail/10001180/
   - オリンピア製、純増約2.6枚/G、ATゲーム性。
   - reliability: INDUSTRY_HIGH
4. 遊技日本 — Sガールズ＆パンツァーG検定通過
   - https://yugi-nippon.com/pachinko-new-machine/post-26855/
   - Sガールズ＆パンツァーG/L4、Sガールズ＆パンツァーG/LA1の検定通過を確認。
   - reliability: INDUSTRY_HIGH / OFFICIAL_NOTICE_RELAY
5. ちょんぼりすた — ガールズ＆パンツァーG
   - https://chonborista.com/slot/orinpia-slot/85072/
   - 7/8導入（一部7/1）、設定別AT初当り/機械割、周期天井、有利区間、設定変更/電断、内部CZ30.4%、300pt。
   - reliability: ANALYSIS_HIGH
6. スロット解析.com — ガルパンG 6号機
   - https://slotkaiseki.com/garupang_spec/
   - 2019-07-08、50.4G/50枚、純増2.6枚/G、設定別AT初当り/機械割。
   - reliability: ANALYSIS_SINGLE
7. すろかい — ガールズ＆パンツァーG解析
   - https://slotkaiseki.hatenablog.com/entry/garupang
   - 型式LA1、7/8導入、周期リセット、内部300pt、6周期目CZ確定。
   - reliability: ANALYSIS_SINGLE
8. スロパチクエスト — ガルパンG 天井/朝一リセット
   - https://www.slopachi-quest.com/article/girls-und-panzer-g-tennjou/
   - 設定変更/電源OFF→ON比較、有利区間ランプ、約32%内部CZ、1G判別。
   - reliability: ANALYSIS_HIGH
9. パチ＆スロ必勝本 — 狙いドコロ&ヤメ時
   - https://p.hisshobon.jp/machine/3369/1/83387
   - 有利区間ランプ/液晶G数による設定変更判別、1G内部CZ判別、内部CZ否定時でも実戦上3周期以内CZ、期待収支+549円。
   - reliability: ANALYSIS_HIGH / EMPIRICAL
10. P-WORLD — パチスロ ガールズ＆パンツァーG
   - https://www.p-world.co.jp/machine/database/8957
   - オリンピア、6号機AT、純増2.6枚/G、6周期CZ、ATの基本構造。
   - reliability: INDUSTRY_DATABASE
11. パチンコ・パチスロ.com — 新台導入日カレンダー2019
   - https://pachinkopachisro.com/archives/52807194.html
   - 2019-07-08にSガールズ＆パンツァーG/LA1を掲載。同日スロット他機種なし。
   - reliability: HISTORICAL_CALENDAR_SINGLE
12. 日刊スポーツ — パチンコ・パチスロ導入カレンダー（2019-05-24）
   - https://www.nikkansports.com/amusement/pachislot/news/201905240000339.html
   - 7月1日欄に本機を掲載。地域先行導入の裏付けとして保持。
   - reliability: INDUSTRY_NEWS

## missingFields

- 検定番号
- L4がLA1と独立販売された別性能スペックかどうかの高信頼確証

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
