# No.1269 Re:ゼロから始める異世界生活

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: Re:ゼロから始める異世界生活
- manufacturer: 大都技研
- releaseDate: 2019-03-04
- generation: 6号機
- systemType: AT / CZ「白鯨攻略戦」経由+AT直撃 / ゲーム数管理
- formalModelNameCanonical: `S Re：ゼロから始める異世界生活A6`
- certificationNumber: `8S1164`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-11

## performanceCore
### payoutRateBySetting / initialHitBySetting
| 設定 | CZ「白鯨攻略戦」 | 機械割 |
|---:|---:|---:|
| 1 | 1/523.8 | 97.4% |
| 2 | 1/486.6 | 99.0% |
| 3 | 1/491.4 | 101.0% |
| 4 | 1/402.5 | 103.9% |
| 5 | 1/379.8 | 108.0% |
| 6 | 1/333.8 | 113.3% |

- HAZUSE/K-Navi/当時解析資料で性能レンジを照合。
- AT「ゼロからっしゅ」の設定別全初当たり確率は、同一定義で6設定すべてを固定できる公開表を今回確認できなかったため、主要初当たりはCZ「白鯨攻略戦」を採用。設定1 AT初当たり約1/1500〜1/1600とする当時解析は補助値として保持するが設定別表には混在させない。

### baseGamesPer50
- **約51.5G/50枚**。

### netIncrease / basicPayout
- AT「ゼロからっしゅ」純増: **約8.0枚/G**。
- AT突入時は特化ゾーン「おねだりAttack」から開始。
- おねだりAttack: **8G+α**、設定1の平均上乗せ **約100G**。
- 業界一次記事でも純増約8.0枚/G、ゲーム数上乗せ型、設定1のおねだりAttack平均約100Gを確認。

## modeSpecificMinimumData
- 通常時モード: 通常A / 通常B / 通常C / 引き戻し / 天国 / 鬼天国。
- モード別最大天井目安:
  - 通常A: 約777G（資料に745G+前兆表記もあり。定義差として保持）→ 白鯨攻略戦
  - 通常B: 約555G → 白鯨攻略戦
  - 通常C: 約456G → 白鯨攻略戦
  - 引き戻し: 約256G → 白鯨攻略戦
  - 天国: 約150G → 白鯨攻略戦
  - 鬼天国: 約256G → AT直撃
- モード抽選タイミングとして有利区間開始時、白鯨攻略戦敗北時、AT終了時の解析が複数資料で一致。

## resetBehavior
### settingChangeBehavior
- **天井リセット**。
- **モード再抽選**。
- **Re:ゼロぽいんとリセット**。
- 朝一は通常、**コンビニステージ**から開始し「レアリティモード抽選中」表示を伴う。
- 設定変更後は非有利区間から有利区間を新たにセットする挙動として、当時解析の有利区間開始時モード抽選と整合する。

### carryOverBehavior
- 朝一で有利区間ランプが点灯し、レムの部屋スタートなら**据え置き濃厚**とする当時攻略資料が複数存在。
- 据え置き時は前日の有利区間・天井進行・モード・内部Re:ゼロぽいんとを保持する運用と解析されている。
- ただし店側の数G回し等の対策で外見上の判別を潰せるため、表示だけで100%断定しない。

### powerCycleBehavior
- 純電源OFF→ON時:
  - 天井: **引き継ぐ**
  - モード: **引き継ぐ**
  - Re:ゼロぽいんと: **内部的に引き継ぐ**（見た目上は0pt）
  - 朝一ステージ: **レムの部屋**
- 設定変更とは明確に挙動が異なる。

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き / 純電源OFF→ON: **CARRY_OVER**。
- 最大天井は通常Aで約777G（別資料の745G+前兆は表示/前兆込み定義差としてCONFLICTではなくDEFINITION_VARIANCE扱い）。

### ceilingAfterReset
- 設定変更で天井進行はリセットされるが、**リセット専用の短縮天井は確認されない**。
- 朝一も再抽選モードに応じ通常Aなら約777G、通常Bなら約555G等の通常モード別天井が適用される。

### modeAfterReset
- 設定変更時: **モード再抽選**。
- 据え置き/純電断: **モード引継ぎ**。
- 非有利区間→有利区間移行時の通常A/B/C/引き戻し振り分けについて後年解析値は存在するが、設定変更専用の公式振り分けと断定せず通常の有利区間開始時データとして分離保持。

### stateAfterReset
- Re:ゼロぽいんと: 設定変更RESET / 純電断CARRY_OVER（表示は0pt）。
- 朝一ステージ: 設定変更=コンビニ / 純電断=レムの部屋。
- 通常時の全内部状態テーブルはミッション対象外。

### advantageousSectionReset
- 設定変更後は有利区間ランプ消灯状態から開始し、コンビニステージで有利区間セットへ進む挙動を確認。
- 据え置き時に朝一有利区間ランプ点灯なら据え置き濃厚。
- ランプ消灯は「設定変更」だけでなく、前日CZ/AT後即ヤメ・店側対策でも発生し得るため**単独では確定判別ではない**。

### resetBenefits
- **リセット専用短縮天井はなし**。
- 高設定を含む朝一1回目は深いゲーム数までハマるケースがあり、朝一設定変更そのものを単純な初当たり優遇と扱わない。
- 比較可能な公式リセット優遇率は今回固定できず。

### resetPenalties
- 設定変更で前日天井進行・モード・Re:ゼロぽいんとが消えるため、据え置き時の宵越し価値は失われる。
- 朝一有利区間リセット直後は200G以内の当選率が極めて低い実戦集計があり、朝一即当たり恩恵を期待しにくい傾向。ただし解析値ではなく実戦集計なので補助値扱い。

### resetDetection
- **コンビニステージ**: 設定変更濃厚（対策なしの場合）。
- **レムの部屋**: 据え置き濃厚。
- **有利区間ランプ点灯**: 据え置き濃厚。
- **有利区間ランプ消灯**: 設定変更 / 前日CZ・AT後即ヤメ / 店側対策のいずれかであり単独確定不可。
- ガックンについて本機固有の確定条件・発生率を、検索語を変えた再探索でも固定できなかったため `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData
- resetShortenedCeiling: `NONE_CONFIRMED`。
- 実戦集計（有利区間リセット後・朝一1回目）:
  - 200G以内当選割合: **0.26%**。
  - 260G以内当選割合: **45.10%**。
- ちょんぼりすた引用の別集計（推定高設定・朝一1回目）では、200G以内 **約0.2%**、550G以上ハマり **12.5%**。
- これらはメーカー公表値ではなく `EMPIRICAL_RESET_SAMPLE` として保持し、公式解析値と混同しない。
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## releaseDate / formalModel
- HAZUSE/K-Navi/当時解析/業界記事で **2019-03-04**導入が一致。
- HAZUSEで型式 **`S Re：ゼロから始める異世界生活A6`**、検定番号 **`8S1164`** を確認。

## missingFields
- 設定変更専用として明示されたモード振り分けの一次/当時高信頼確定値。
- 本機固有ガックンの発生条件・発生率。
- 設定別AT「ゼロからっしゅ」全初当たり確率の同一定義6設定表。

## conflicts / definitionNotes
- `DEFINITION_VARIANCE_CEILING_777G_VS_745G_PLUS_FOREWARNING`
  - 多数解析: 最大約777G。
  - 期待値見える化: 通常A 745G+前兆。
  - 実質的な天井到達表示/前兆込みの定義差とみられるため平均せず双方を保持。
- 純増約3.5枚/Gとする後年二次ページを1件確認したが、2019年当時の業界一次記事・HAZUSE・複数解析が約8.0枚/Gで一致するため `CONFLICT_SECONDARY_LATE_PAGE_3_5_VS_CONTEMPORARY_8_0` として8.0枚/Gをcanonical。

## sources
取得日: 2026-09-11
1. HAZUSE — https://hazuse.com/machine/pachislot/8S1164/genre/207/ — 型式、検定番号、導入日、出玉率端点、純増 — reliability: `ANALYSIS_HIGH_MACHINE_DB`
2. K-Navi — https://p-kn.com/slot/3187/ — 2019-03-04、設定別白鯨攻略戦 — reliability: `MACHINE_DB_CROSSCHECK`
3. Amusement Japan — https://amusement-japan.co.jp/article/detail/10001012/ — 2019-02-06プレス試打会、純増約8.0枚/G、AT方式、おねだりAttack 8G+α・設定1平均約100G、3/4導入予定 — reliability: `INDUSTRY_PRIMARY`
4. スロット解析情報~すろかい~ — https://slotkaiseki.hatenablog.com/entry/rezero — 当時解析、導入日、51.5G/50枚、設定別白鯨/機械割 — reliability: `CONTEMPORARY_ANALYSIS`
5. おスロおパチおいでやす — https://oslo-opachi.com/2019/03/03/post-4814/ — 設定変更/電源OFF→ON比較表、天井・モード・ポイント・ステージ、有利区間ランプ判別 — reliability: `CONTEMPORARY_ANALYSIS_HIGH`
6. ちょんぼりすた — https://chonborista.com/slot/daito-slot/75346/comment-page-2/ — 朝一リセット比較、有利区間ランプ判別、朝一実戦値 — reliability: `ANALYSIS_HIGH`
7. 期待値見える化 モード — https://slotjin.com/slot/rezero-mode/ — 有利区間リセット後の朝一実戦値 200G以内0.26% / 260G以内45.10% — reliability: `EMPIRICAL_ANALYSIS`
8. 期待値見える化 天井 — https://slotjin.com/tenjoukitaichi/rezero2/ — 745G+前兆表記、モード別天井 — reliability: `EMPIRICAL_ANALYSIS`
9. なな徹 — https://nana-press.com/kaiseki/machine/28/429/ — 後年照合、モード別天井 — reliability: `RETROSPECTIVE_ANALYSIS_HIGH`
10. スロベース — https://slobase.jp/machines/rezero — 後年ページ。純増3.5枚/G表記は当時資料群と競合するためcanonical不採用 — reliability: `SECONDARY_CONFLICT`

## confidence
- releaseDate/formalModel/certification: `ANALYSIS_HIGH_CROSSCHECKED`
- performanceCore: `INDUSTRY_PRIMARY_PLUS_ANALYSIS_HIGH_CROSSCHECKED`
- resetBehaviorCore: `CONTEMPORARY_ANALYSIS_HIGH_CROSSCHECKED`
- resetDetection: `ANALYSIS_HIGH_WITH_OPERATIONAL_CAVEAT`
- numericResetData: `EMPIRICAL_ONLY_NOT_OFFICIAL`
