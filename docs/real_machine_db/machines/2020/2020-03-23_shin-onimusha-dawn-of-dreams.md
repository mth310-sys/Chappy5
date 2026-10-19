# パチスロ 新鬼武者～DAWN OF DREAMS～

No: 1347
machineName: パチスロ 新鬼武者～DAWN OF DREAMS～
machineNameVariants: 新鬼武者～DAWN OF DREAMS～ / 新鬼武者 6号機
manufacturer: エンターライズ
releaseDate: 2020-03-23
formalModelName: S新鬼武者ZC
certificationNumber: 9S1474
generation: 6号機
systemType: AT / 疑似ボーナス

## payoutRateBySetting
| 設定 | 出玉率 |
|---|---:|
| 1 | 97.9% |
| 2 | 99.4% |
| 3 | 100.8% |
| 4 | 103.6% |
| 5 | 105.7% |
| 6 | 110.0% |

- K-Navi、すろぬー等で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
### BONUS初当たり
| 設定 | BONUS初当たり |
|---|---:|
| 1 | 1/299.8 |
| 2 | 1/297.8 |
| 3 | 1/272.7 |
| 4 | 1/258.3 |
| 5 | 1/226.3 |
| 6 | 1/161.0 |

### AT初当たり（幻魔闘BONUS）
| 設定 | AT初当たり |
|---|---:|
| 1 | 1/786.0 |
| 2 | 1/603.7 |
| 3 | 1/694.7 |
| 4 | 1/495.3 |
| 5 | 1/562.6 |
| 6 | 1/324.7 |

- 設定値が単調にならない箇所を含むため、公開値をそのまま保存し補間しない。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約51G/50枚。
- reliability: MULTIPLE_ANALYSIS_CONFIRMATION

## netIncrease
- 疑似ボーナス/AT純増: 約3.0枚/G。
- reliability: INDUSTRY_WITH_MULTIPLE_ANALYSIS_CONFIRMATION

## basicPayout
- 初当たり契機は、レア役直撃・規定ゲーム数・CZ「目覚めよ鬼」等。
- 初当たり後は主に「鬼ノ試練」を経由し、バトル勝利からメインAT「幻魔闘BONUS」を目指す。
- 実機性能比較に必要なAT純増・初当たり・天井を性能コアとして保持し、詳細内部抽選の完全再現値は対象外。

## modeSpecificMinimumData
- 通常時内部状態: 低確 / 高確 / 超高確。
- 有利区間移行時に内部状態を抽選。
- 代表的なゲーム数契機: 89〜96G / 200〜215G / 365〜380G / 777G。
- 200〜215Gでのゲーム数解除率には設定差あり。
- 通常時最大天井: **有利区間移行後777G+前兆**。到達後は初当たり（ボーナス）当選。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は **天井G数RESET / 内部状態RESET / 有利区間RESET**。
- 設定変更後は非有利区間から開始。
- 液晶開始ステージは **桜道ステージ（昼）**。
- 1gekiは **設定変更でもガックンしない** と明記。

### carryOverBehavior
- 据え置きは設定変更を伴わないため、公開されている電源OFF→ON契約に基づき **天井進行 / 内部状態 / 有利区間をCARRY_OVER** と整理。
- 「据え置き」という語で3項目を独立列挙した別表は今回固定できないため、電断契約との関係を注記して保存。

### powerCycleBehavior
- 電源OFF→ONのみでは **天井G数 / 内部状態 / 有利区間をCARRY_OVER**。
- 液晶開始ステージは桜道ステージ（昼）。演出は異なる可能性あり。

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き / 電源OFF→ON: **INTERNAL_CARRY_OVER**。

### ceilingAfterReset
- 設定変更後も最大天井は **777G+前兆**。
- リセット専用の固定短縮天井は確認されていない。

### modeAfterReset
- 本機はゲーム数モード固定型というより、内部状態と複数当選契機を持つAT機として整理。
- 設定変更前の内部状態は引き継がない。
- 設定変更専用の別モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: **RESET後、有利区間移行時に状態抽選**。
- 有利区間移行時状態振り分け（低確 / 高確 / 超高確）:
  - 設定1: 54.7 / 44.9 / 0.4%
  - 設定2: 53.9 / 45.7 / 0.4%
  - 設定3: 53.1 / 46.5 / 0.4%
  - 設定4: 51.6 / 48.0 / 0.4%
  - 設定5: 50.0 / 49.6 / 0.4%
  - 設定6: 45.3 / 54.3 / 0.4%
- 上記は設定変更専用値ではなく **有利区間移行時の共通公開値** として区別する。

### advantageousSectionReset
- 設定変更: **RESET**。
- 据え置き / 電源OFF→ON: **CARRY_OVER**。
- 通常時は有利区間ランプ消灯型のため、ランプ単独での朝一リセット判別は困難。

### resetBenefits
- リセット専用の短縮天井・専用優遇テーブル: **NONE_CONFIRMED**。
- スロパチクエストも「リセット狙い目: 特になし」と整理。

### resetPenalties
- 設定変更で前日の天井進行・内部状態・有利区間を消去。
- その他の設定変更専用不利要素: **NONE_CONFIRMED**。

### resetDetection
- 有利区間ランプ: 通常時消灯型のため **単独判別不可**。
- ガックン: 1gekiは **設定変更でもガックンしない**、期待値見える化も実戦上ガックン判別不可とする。
- 朝一ステージは設定変更/電源OFF→ONとも桜道ステージ（昼）のため単独判別材料にならない。

### numericResetData / publicMorningNumbers
- 最大天井: **777G+前兆**。
- 有利区間移行時状態振り分け: 設定1〜6で低確45.3〜54.7%、高確44.9〜54.3%、超高確0.4%。
- 設定変更専用短縮天井: **NONE_CONFIRMED**。
- 設定変更専用朝一当選率: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**。
- ガックン発生率: **NOT_APPLICABLE_AS_DETECTION_CLUE / 設定変更でもガックンせず**。

## resetBehavior 再探索メモ
2026-09-11に `新鬼武者 DAWN OF DREAMS / S新鬼武者ZC / 9S1474 / エンターライズ / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 状態 / 有利区間 / 有利区間ランプ / ガックン` を組み替え、遊技日本、HAZUSE、1geki、スロパチクエスト、期待値見える化、K-Navi、当時解析・導入記事を横断。設定変更時RESET、電断時CARRY_OVER、桜道昼開始、通常時有利区間ランプ消灯、設定変更でもガックンしない点まで直接固定できた。設定変更専用短縮天井・朝一専用当選率は確認できず推測補完していない。

## conflicts
- `NONE_CONFIRMED`。
- AT初当たりは設定順に単調ではないが、複数解析で同値のため誤補正しない。

## sources
取得日: 2026-09-11

1. 遊技日本 — 3/23導入 新鬼武者～DAWN OF DREAMS～
   - https://yugi-nippon.com/pachinko-new-machine/post-33962/
   - エンターライズ製、2020-03-23全国導入開始、6号機AT、純増約3枚/Gを確認。
   - confidence: INDUSTRY_HIGH
2. HAZUSE — 機種DB / 天井・設定変更
   - https://hazuse.com/machine/pachislot/9S1474/
   - 型式S新鬼武者ZC、検定9S1474、導入日、天井777G、設定変更/電断の天井・内部状態・有利区間契約を確認。
   - confidence: ANALYSIS_HIGH
3. 1geki — 天井/設定変更
   - https://1geki.jp/slot/s_sonimusya/3/
   - 777G+前兆、設定変更時非有利区間、電断時引継ぎ、桜道昼開始、設定変更でもガックンしないことを確認。
   - confidence: ANALYSIS_HIGH
4. 1geki — 状態移行抽選
   - https://1geki.jp/slot/s_sonimusya/44/
   - 有利区間移行時の低確/高確/超高確振り分けを確認。
   - confidence: ANALYSIS_HIGH
5. スロパチクエスト — 天井・朝一
   - https://www.slopachi-quest.com/article/shinonimusha-dawn-of-dreams-tenjou/
   - 約51G/50枚、天井、ゲーム数ゾーン、リセット狙い目特になしを確認。
   - confidence: ANALYSIS_HIGH
6. K-Navi — 基本スペック
   - https://p-kn.com/slot/3372/
   - BONUS/AT初当たり、機械割、2020-03-23導入を確認。
   - confidence: ANALYSIS_HIGH
7. すろぬー — 当時設定判別まとめ
   - https://slonuu.com/pg/s-sinonidod
   - 約51G/50枚、純増約3.0枚/G、初当たり・機械割を確認。
   - confidence: ANALYSIS
8. 期待値見える化 — 朝一リセット
   - https://slotjin.com/tenjoukitaichi/shinonimusha/
   - 通常時有利区間ランプ消灯、ガックン判別実戦上不可を確認。
   - confidence: ANALYSIS

## dataQuality
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_PUBLIC_RESET_CORE
overallReliability: ANALYSIS_HIGH_WITH_INDUSTRY_CONFIRMATION
