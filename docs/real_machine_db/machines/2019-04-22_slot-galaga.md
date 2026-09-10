# No.1279 SLOTギャラガ

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: SLOTギャラガ
- manufacturer: メーシー
- releaseDateCanonical: 2019-04-22
- generation: 6号機
- systemType: AT / 疑似ボーナス / 32G ST型引き戻し区間
- formalModelNameCanonical: `S／ギャラガ／DB`
- certificationNumber: `8S1110`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-11

## performanceCore
### payoutRateBySetting / initialHitBySetting
| 設定 | ボーナス初当り | トータルボーナス出現率 | 機械割 |
|---:|---:|---:|---:|
| 1 | 1/249.1 | 1/145.5 | 97.3% |
| 2 | 1/239.9 | 1/138.7 | 99.1% |
| 5 | 1/212.6 | 1/121.9 | 103.0% |
| 6 | 1/179.4 | 1/109.8 | 107.0% |

- ちょんぼりすた、一撃、モゲスロで主要値一致。HAZUSEでも機械割97.3 / 99.1 / 103.0 / 107.0%を照合。
- `ボーナス初当り` と、32G STや1G連を含む `トータルボーナス出現率` は定義が異なるため分離保存。

### baseGamesPer50
- 設定1: **51.3G/50枚**
- 設定2: **51.4G/50枚**
- 設定5: **52.5G/50枚**
- 設定6: **53.4G/50枚**
- ちょんぼりすたの設定別値をcanonical。すろぱちくえすとは51.3〜53.4G/50枚、スペック記事の代表値51Gともレンジ整合。

### netIncrease / basicPayout
- AT純増: **約4.0枚/G**。
- BIG（ギャラガBONUS / ファイターBONUS）: **約155枚**、小役ゲーム25G+JAC。
- REG BONUS: **約48枚**。
- BIG後は32GのST型引き戻し区間 **ギャラガゾーン** へ移行。
- グリーンべると当時業界記事、遊技日本、HAZUSE、パチビー、複数解析で構造と獲得性能を照合。

## modeSpecificMinimumData
- 通常ゲーム数天井: **非搭載**。
- ギャラガゾーン: **32G**。BIG中スコアランクに応じてボーナス期待度が変化し、最大ループ率90%以上とされる。
- 完全再現用のランク別全抽選値・小役別当選率は本DB目的外として収集しない。

## resetBehavior
### settingChangeBehavior
- HAZUSE: 設定変更時は **非有利区間へ移行**。
- ちょんぼりすた: 設定変更時は **内部状態リセット**。
- モゲスロ: 設定変更時は **非有利区間へ**。
- よって本DBでは `RESET_TO_NON_ADVANTAGEOUS_SECTION / INTERNAL_STATE_RESET` として保存。

### carryOverBehavior
- 据え置き専用の独立表記は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- ただし設定変更を伴わない純電源OFF→ONについては、HAZUSE/ちょんぼりすた/モゲスロが引継ぎを明記している。

### powerCycleBehavior
- HAZUSE: 電源ON・OFFのみでは **有利区間を引き継ぐ**。
- ちょんぼりすた: 電源OFF→ON時は **内部状態を引き継ぐ**。
- モゲスロ: 電源OFF/ON時は **引き継ぐ**。
- `CARRY_OVER_ADVANTAGEOUS_SECTION_AND_INTERNAL_STATE`。

### gameCounterReset
- 通常ゲーム数天井非搭載のため `NOT_APPLICABLE_NO_CEILING`。
- 32Gギャラガゾーン等の途中状態について、設定変更時は内部状態リセット、純電断は内部状態引継ぎの範囲で扱う。

### ceilingAfterReset
- 天井非搭載のため `NOT_APPLICABLE_NO_CEILING`。設定変更専用の短縮天井なし。

### modeAfterReset
- 通常ゲーム数天井モードは `NOT_APPLICABLE`。
- 設定変更時は非有利区間へ移行。朝一専用モードや設定変更専用モード振り分けの公開値は十分な再探索後も `PUBLIC_NUMERIC_VALUE_NOT_FOUND`。

### stateAfterReset
- 設定変更: **内部状態RESET**。
- 電源OFF→ON: **内部状態CARRY_OVER**。
- 据え置きのみを純電断と分離した追加契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### advantageousSectionReset
- 設定変更: **RESET / 非有利区間へ移行**。
- 電源OFF→ON: **CARRY_OVER**。
- 据え置き専用独立記述: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### resetBenefits
- 通常天井短縮、設定変更専用の初当たり優遇、専用CZ優遇などは `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一で非有利区間から始まること自体は確認済みだが、客側に比較可能な具体的恩恵数値は固定できない。

### resetPenalties
- 設定変更時は前日からの内部状態/有利区間をリセットするため、閉店時に有利な内部状態なら保持されない。
- それ以外の設定変更専用不利抽選・ペナルティ数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン有効性・発生率・初期出目・ランプ点灯状態を用いた確定的な変更判別は、検索語を変えて再探索しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は設定変更で非有利区間へ移行すること自体は確認できるが、朝一外観だけで確定判別できる公開契約は今回固定しない。

### numericResetData
- 設定変更時の朝一専用モード振り分け: `PUBLIC_NUMERIC_VALUE_NOT_FOUND`。
- 朝一特定G以内の当選率/期待度: `PUBLIC_NUMERIC_VALUE_NOT_FOUND`。
- 短縮天井G数: `NOT_APPLICABLE_NO_CEILING`。
- リセット恩恵発生率: `PUBLIC_NUMERIC_VALUE_NOT_FOUND`。
- ガックン発生率: `PUBLIC_NUMERIC_VALUE_NOT_FOUND`。

## releaseDate / formalModel
- HAZUSEで型式 **`S／ギャラガ／DB`**、検定番号 **`8S1110`**、メーカー **メーシー**、導入開始日 **2019-04-22** を直接確認。
- ユニバーサル公式ファミスロポータルは2019-03-04にティザー公開、3/29にスペック公開、4月中もギャラガ公式情報を継続公開。
- グリーンべると2019-03-22当時記事はメーシー製、納品4/21予定。遊技日本は4月下旬導入予定。解析/機種DBの2019-04-22導入と整合する。

## boundaryAudit
- 最新handoffの2019-04-09〜04-21境界を再確認し、4/15に新規パチスロ本線機を追加固定できず、次群を2019-04-22とする。
- 2019-04-22群で `SLOTギャラガ / プレミアムハナハナ-30 / パチスロ黄門ちゃまV 女神盛-MEGAMORI-` を複数資料から確認。
- 本レコードはその最初の未処理機 `SLOTギャラガ`。群はまだOPEN。

## missingFields
- 据え置き条件を純電源OFF→ONと明示的に分離した本機固有の契約。
- 本機固有のガックン/初期出目/ランプによる設定変更判別の確定条件・発生率。
- 設定変更専用の朝一当選率、専用モード振り分け等の公開数値。

## conflicts / qualityNotes
- パチビーの機種タグには「天井あり」と表示される一方、HAZUSE、ちょんぼりすた、すろぱちくえすと等の専用攻略本文は **天井非搭載** で一致する。平均・折衷せず `CONFLICT_LOW_QUALITY_METADATA_CEILING_TAG_VS_MULTIPLE_DEDICATED_ANALYSIS_NO_CEILING` として保持し、canonicalは専用本文複数一致の **天井非搭載**。
- 一部スペック記事のベースは代表値約51Gだが、設定別解析は51.3〜53.4G。定義競合ではなく代表値対設定別値として分離。

## sources
取得日: 2026-09-11
1. ユニバーサルエンターテインメント公式 ファミスロ — https://famislo.com/ — SLOTギャラガ公式情報公開履歴 — reliability: `OFFICIAL`
2. HAZUSE — https://hazuse.com/machine/pachislot/8S1110/ — 型式、検定番号、導入日、メーカー、6号機AT、機械割、純増、基本獲得、天井、設定変更/電源ON-OFF時の有利区間 — reliability: `MACHINE_DB_HIGH_RESET_SPECIFIC`
3. HAZUSE AT/ART — https://hazuse.com/machine/pachislot/8S1110/genre/209/ — BIG約155枚、REG約48枚、32Gギャラガゾーン — reliability: `MACHINE_DB_HIGH`
4. グリーンべると — https://web-greenbelt.jp/00011169/ — 2019-03-22当時業界記事、メーシー製、純増4.0枚/G、BB約155枚、RB約48枚、32G ST、4/21納品予定 — reliability: `INDUSTRY_CONTEMPORARY`
5. 遊技日本 — https://yugi-nippon.com/pachinko-new-machine/post-26014/ — 2019-03-06当時記事、メーシー製、4月下旬導入予定、32G ST — reliability: `INDUSTRY_CONTEMPORARY`
6. ちょんぼりすた — https://chonborista.com/slot/universal-slot/80286/ — 導入日、設定別初当り/トータル/機械割、51.3〜53.4G、純増、天井なし、設定変更内部状態RESET/電源OFF→ON引継ぎ — reliability: `ANALYSIS_HIGH_RESET_SPECIFIC`
7. 一撃 — https://1geki.jp/slot/s_galaga/ — 導入日、設定別初当り/トータル/機械割、6号機AT — reliability: `ANALYSIS_HIGH_CROSSCHECK`
8. モゲスロ — https://moge-site.com/archives/21792 — 設定別性能、設定変更で非有利区間/電源OFF-ON引継ぎ — reliability: `ANALYSIS_RESET_CROSSCHECK`
9. すろぱちくえすと — https://www.slopachi-quest.com/article/galaga-settei/ — 導入日、51.3〜53.4G/50枚、純増約4.0枚/G、天井非搭載、基本獲得 — reliability: `ANALYSIS_HIGH_CROSSCHECK`
10. パチビー — https://www.pachibee.jp/machines/about/219030004 — 導入日、6号機AT、純増約4.0枚/G、BIG約155枚、REG約48枚、32Gゾーン。機種タグの「天井あり」は他専用解析と競合 — reliability: `MACHINE_DB_MIXED_METADATA_CONFLICT`
