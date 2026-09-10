# No.1237 ツインドラゴンハナハナ-30

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: ツインドラゴンハナハナ-30
- manufacturer: パイオニア
- releaseDateCanonical: 2018-10-15
- generation: 5.9号機
- systemType: ノーマル / Aタイプ / 30Φ
- formalModelName: `ツインドラゴンハナハナ／DX-30`
- certificationNumber: `7S1812`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- パイオニア公式2018年製品一覧は「2018年10月発売」と掲載。
- グリーンべると/P-WORLDの2018-09-06業界記事は納品開始を2018-10-14予定と掲載。
- HAZUSE、K-Navi、すろぱちくえすとはホール導入開始日を2018-10-15と掲載。
- canonical: `2018-10-15`。
- confidence: `OFFICIAL_MONTH_PLUS_CONTEMPORARY_INDUSTRY_PLUS_MULTIPLE_ANALYSIS_CROSSCHECKED`。

## identificationEvidence
- パイオニア公式現存2018年製品一覧で「ツインドラゴンハナハナ-30」を確認。
- HAZUSEは型式名 `ツインドラゴンハナハナ／DX-30`、検定番号 `7S1812`、5号機ノーマル30パイ、2018-10-15導入を掲載。
- 一部後年攻略ページに「25φ/30φ」との見出しがあるが、パイオニア公式2018年製品一覧・当時業界発表・HAZUSEの型式同定はいずれも本機を `-30` / `DX-30` としている。今回、同時期の独立25Φ型式を高信頼で固定できなかったため25Φ派生を別レコード化しない。

## performanceCore
### payoutRateBySetting
- setting1: 96.0%
- setting2: 98.0%
- setting3: 101.0%
- setting4: 104.0%
- setting5: 107.0%
- setting6: 112.0%
- 当時グリーンべると/P-WORLDは設定1→6レンジ96%～112%。HAZUSE、すろぱちくえすと、複数解析で設定別系列一致。

### initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/296 | 1/492 | 1/185 |
| 2 | 1/286 | 1/461 | 1/176 |
| 3 | 1/275 | 1/431 | 1/168 |
| 4 | 1/262 | 1/397 | 1/157 |
| 5 | 1/249 | 1/368 | 1/148 |
| 6 | 1/232 | 1/331 | 1/136 |

- グリーンべると/P-WORLD業界記事のレンジ（BIG 1/296～1/232、REG 1/492～1/331、合算1/185～1/136）とHAZUSE・すろぱちくえすとの設定別表を照合。

### baseGamesPer50
- 約36.3G/50枚。
- すろぱちくえすと等の解析値。比較用ベースとして保持。

### netIncrease
- `NOT_APPLICABLE_NORMAL_TYPE`。
- AT/ART/RTによる継続純増型ではなく、ボーナス主体ノーマルタイプ。

### basicPayout
- BIG: 最大312枚。
- REG: 最大130枚。
- 当時グリーンべると/P-WORLD業界記事とすろぱちくえすとで一致。
- 型式上の払い出し終了条件として、BIGは345枚超払い出し、REGは135枚超払い出しの記載あり。実獲得最大312/130枚とは定義を分離する。

### ceiling
- 天井: `NONE / NOT_EQUIPPED`。
- すろぱちくえすと、HAZUSE系解析で確認。

## modeSpecificMinimumData
- ハイビスカス点灯でボーナス告知する30Φノーマルタイプ。
- 新筐体「ジェネシス」、上部「龍玉（TOP）パネル」を搭載。
- BIG/REG後の龍玉発光色に設定示唆があるが、物差し用途ではリセット判別に関係する初回BIGの設定変更時50%点灯のみresetBehaviorへ収録し、通常設定示唆の詳細振り分けは収集対象外。

## resetBehavior
### settingChangeBehavior
- `RESET_CONFIRMED_WITH_FIRST_BIG_DRAGON_ORB_FLASH_50_PERCENT_AND_REEL_GAKKUN_USABLE`
- 当時すろぱちくえすと設定判別記事は、設定変更・リセット後の初回BIG終了時に50%で龍玉が光ると掲載。
- 同記事は朝一ガックン判別を「有効（個体差あり）」と掲載。
- 内部ボーナス抽選状態・リール制御等の設定変更時初期化詳細は、ホール経営物差しに必要な範囲の機種固有直接資料を追加固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- `CARRYOVER_INDICATOR_CONFIRMED_BY_CROSS_DAY_100G_BIG_BGM_OTHER_INTERNAL_STATE_UNVERIFIED`
- 前日＋当日のゲーム数が100G以内となるBIGでBGM変化が発生すれば据え置き濃厚と当時解析が記載。
- ただし設定据え置き時の全内部状態を明文化した本機固有資料は固定できず、純電断と同義扱いしない。

### powerCycleBehavior
- `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`
- 設定を変更せず電源OFF→ONのみ行った場合の内部状態、初期出目、ガックン発生有無を、本機固有かつ独立条件で説明する高信頼資料を今回固定できず。
- 据え置き判別用BGM条件から純電断挙動を推測補完しない。

### gameCounterReset
- `NOT_APPLICABLE_NO_CEILING_COUNTER`。
- 通常ゲーム数天井非搭載。
- 前日＋当日100G以内BIGのBGM判別は演出履歴/据え置き推測用の公開挙動であり、天井カウンタとは別契約として扱う。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。
- 設定変更専用短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 朝一専用内部モード/設定変更専用モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- ノーマル機の設定変更判別演出をAT/ART機の内部モードへ読み替えない。

### stateAfterReset
- 初回BIG後龍玉50%点灯という設定変更後専用判別挙動は確認。
- その他の内部状態: `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- `N/A_NOT_APPLICABLE_TO_CORE_GAMEPLAY`。
- 5.9号機ノーマルタイプで、本機の主要出玉性能・朝一挙動を有利区間に依存させる本機固有資料は確認していない。

### resetBenefits
- 出玉上の短縮天井・初当たり優遇等: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更を推測できる初回BIG後龍玉50%点灯は客側の朝一判別情報として重要だが、直接の出玉恩恵とは分離。

### resetPenalties
- `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- `MULTIPLE_PUBLIC_DETECTION_SIGNALS_CONFIRMED`。
- 朝一リールガックン: 有効。ただし個体差あり。
- 設定変更・リセット後の初回BIG終了時: 50%で龍玉点灯。点灯すればリセット可能性UP。
- 前日＋当日の合計が100G以内でBIG当選時のBGM変化: 据え置き濃厚。
- ガックン対策は店舗側で可能との実戦系資料があるため、単独で確定判別にはしない。

### numericResetData
- normalCeiling: `NONE`。
- resetSpecificCeiling: `NOT_APPLICABLE`。
- firstBIGDragonOrbFlashAfterReset: `50%`。
- resetReelGakkun: `VALID_BUT_INDIVIDUAL_MACHINE_VARIATION`（発生率数値は未確認）。
- carryoverBGMCondition: `前日＋当日100G以内でBIG時にBGM変化なら据え置き濃厚`。
- resetModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`。
- morningHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- 性能コア主要値に重大なCONFLICTなし。
- 後年攻略の一部見出しに「25φ/30φ」とある一方、メーカー公式・当時業界発表・型式DBは本機を30Φ `ツインドラゴンハナハナ-30 / DX-30` として同定。独立25Φ型式は今回高信頼で確認できず、`CONFLICT_LOW_CONFIDENCE_25PHI_LABEL_VS_OFFICIAL_30PHI_IDENTIFICATION` として平均・派生推定せず保持。
- HAZUSE検索表示のメーカー名が「バイオニア」と誤表記される箇所があるが、パイオニア公式・当時業界記事・他解析はパイオニアで一致するためcanonical manufacturerはパイオニア。

## missingFields
- 純電源OFF→ONのみの本機固有内部状態・初期出目・ガックン処理。
- 設定据え置き時の全内部状態の直接契約（据え置き濃厚BGM判別条件自体は取得済み）。
- ガックン発生率の公開数値。
- 設定変更専用モード/朝一初当たり優遇などの公開数値（存在を示す確定資料なし）。

## sources
取得日: 2026-09-10

1. パイオニア公式 2018年製品一覧 — https://www.slot-pioneer.co.jp/products/2018.html
   - 「ツインドラゴンハナハナ-30」、2018年10月発売、公式機種同定。
   - reliability: OFFICIAL
2. グリーンべると / P-WORLD業界ニュース「ハナハナの完成形が新筐体で登場！」 — https://news.p-world.co.jp/articles/10400/greenbelt
   - 2018-09-06、30パイノーマル、BIG/REG/合算レンジ、出玉率96～112%、BIG最大312枚、REG最大130枚、10/14納品予定。
   - reliability: INDUSTRY_CONTEMPORARY
3. PiDEA X「ツインドラゴンハナハナ 新筐体で登場／パイオニア」 — https://www.pidea.jp/articles/%E3%80%8C%E3%83%84%E3%82%A4%E3%83%B3%E3%83%89%E3%83%A9%E3%82%B4%E3%83%B3%E3%83%8F%E3%83%8A%E3%83%8F%E3%83%8A%E3%80%8D%E6%96%B0%E7%AD%90%E4%BD%93%E3%81%A7%E7%99%BB%E5%A0%B4%EF%BC%8F%E3%83%91%E3%82%A4%E3%82%AA%E3%83%8B%E3%82%A2
   - 2018-09-06内覧会報道、30パイノーマル、払い出し条件、合算レンジ、10/14納品予定。
   - reliability: INDUSTRY_CONTEMPORARY
4. HAZUSE ツインドラゴンハナハナ-30 — https://hazuse.com/machine/pachislot/7S1812/
   - 5号機ノーマル30パイ、導入2018-10-15、型式 `ツインドラゴンハナハナ／DX-30`、検定番号 `7S1812`、出玉率レンジ。
   - reliability: CONTEMPORARY_ANALYSIS_DATABASE
5. すろぱちくえすと 基本 — https://www.slopachi-quest.com/article/twindragon-hanahana/
   - 導入2018-10-15、約36.3G/50枚、設定別BIG/REG/合算/機械割、BIG312枚、REG130枚、天井非搭載。
   - reliability: ANALYSIS_HIGH
6. すろぱちくえすと 設定判別 — https://www.slopachi-quest.com/article/twindragon-hanahana-settei/
   - ガックン有効（個体差あり）、設定変更・リセット後初回BIG終了時50%龍玉点灯、前日＋当日100G以内BIGのBGM変化で据え置き濃厚、設定別性能表。
   - reliability: ANALYSIS_HIGH
7. ハナハナ解析ブログ — https://hanahana-blog.com/twin-dragon-hanahana
   - 朝一ガックン判別の補助確認、設定示唆構造。
   - reliability: ANALYSIS_SINGLE

## researchNotes
- resetBehaviorは「ツインドラゴンハナハナ / -30 / DX-30」「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」「龍玉」「BGM」を組み替え、メーカー公式、当時業界、HAZUSE、当時解析、ハナハナ系回顧/解析を横断。
- 直接確認できた設定変更判別契約（初回BIG龍玉50%、ガックン有効）と据え置き濃厚BGM条件は収録したが、純電断処理は据え置きから推測していない。
- 実機完全再現用の通常設定示唆振り分けや小役詳細は収録対象外。
