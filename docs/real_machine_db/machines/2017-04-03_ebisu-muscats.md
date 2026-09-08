machineName: パチスロ恵比寿マスカッツ
manufacturer: EXCITE（エキサイト） / ニューギングループ
releaseDate: 2017-04-03
recordNumber: 1065
generation: 5号機
systemType: 疑似ボーナス+ART / ART特化型
formalModelName: 恵比寿マスカッツY
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- パチビー、K-Navi、パチ＆スロ必勝本、アタリ7でホール導入2017-04-03を確認。
- 2017-02-15の業界記事ではEXCITE製・ニューギン発表機として確認。グリーンべるとは納品予定2017-04-02を報道。
- 検定通過記事で型式名 `恵比寿マスカッツY`、メーカー エキサイトを確認。
- 検定番号は `恵比寿マスカッツ / パチスロ恵比寿マスカッツ / 恵比寿マスカッツY / EXCITE / エキサイト / 検定 / 6S` 等で再探索したが、直接固定できる資料を今回確認できず推測しない。
reliability: INDUSTRY_HIGH

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 2 | 98.7% |
| 3 | 100.6% |
| 4 | 103.1% |
| 5 | 106.1% |
| 6 | 110.1% |
- パチ＆スロ必勝本、アタリ7、5号機クロニクルで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | 疑似BONUS | ART初当たり |
|---:|---:|---:|
| 1 | 1/297.2 | 1/574.0 |
| 2 | 1/295.2 | 1/570.7 |
| 3 | 1/274.4 | 1/500.5 |
| 4 | 1/258.1 | 1/452.4 |
| 5 | 1/260.8 | 1/424.1 |
| 6 | 1/237.4 | 1/362.5 |
- パチ＆スロ必勝本と5号機クロニクルで精密値一致。アタリ7は同系列の整数丸め。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 設定1: 約46.7G/50枚。
- パチ＆スロ必勝本の狙いドコロ掲載値をcanonicalとして保持。
reliability: ANALYSIS_HIGH

## netIncrease
- ART「マスカッツRUSH」および疑似ボーナス系: 約2.0枚/G。
- 業界発表、パチビー、K-Navi、パチ＆スロ必勝本で一致。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- マスカッツCHANCE: 1セット=バナナナビ5回、最大5セット。5セット完走でART確定。
- ART「マスカッツRUSH」: 初期G数変動型。開始時はスカッとZONEまたはエクスタシーZONEを経由。
- スカッとZONE平均上乗せ約80G、エクスタシーZONE平均約200Gは比較補助値として保持。
- 固定枚数ボーナスではないため、実機完全再現用のナビ成立分布等はSCOPE_EXCLUDED。
reliability: INDUSTRY/ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はポイントを蓄積し1000pt到達で高確率/CZ/疑似BONUS/ART等の契機。
- 通常のゲーム数天井は最大999G系。設定別で111/333/777/999Gの振り分けが公開されている。
- 設定変更後のみ999G選択が消え、111/333/777Gの短縮テーブルへ移るため、朝一客行動に直接関係する数値をresetBehaviorへ収録。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_APPLICABLE_FIELDS_WITH_NUMERIC_RESET_DATA_AND_DOCUMENTED_UNKNOWNS
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- ゲーム数天井: RESET。
- 設定変更後は天井選択が111G / 333G / 777Gの専用短縮テーブルとなり、通常時の999G選択はない。
- 内部状態: 当時解析でも「調査中」。後年資料・表記揺れ・型式名・メーカー名を含めて再探索したが、設定変更時の状態再抽選契約を直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ポイント残量の設定変更時契約も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。一般的挙動から推測しない。
reliability: ANALYSIS_HIGH_FOR_CEILING / UNVERIFIED_FOR_STATE_AND_POINTS

### carryOverBehavior
- 据え置きは天井進捗を引き継ぐ。
- 純電源OFF→ON比較資料で天井が「据え置き」と明記されるため、ゲーム数天井はCARRYOVER。
- 内部状態・ポイント残量の据え置き契約は直接固定資料不足のため、天井以外を一般論で補完しない。
reliability: ANALYSIS_HIGH_FOR_CEILING

### powerCycleBehavior
- 電源OFF→ONのみ: 天井ゲーム数CARRYOVER。
- 内部状態: `UNVERIFIED_AFTER_RESEARCH`。
- ポイント残量: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更と純電断を同一視しない。
reliability: ANALYSIS_HIGH_FOR_CEILING

### gameCounterReset
- settingChange: RESET。
- carryOver/powerCycle: CARRYOVER。
- 通常最大999G系の天井進捗が対象。

### ceilingAfterReset
- 設定変更後は最大777Gへ短縮。
- 選択候補は111G / 333G / 777G。設定別振り分けはnumericResetDataへ保存。
reliability: ANALYSIS_HIGH

### modeAfterReset
- 天井ゲーム数選択テーブルは設定変更専用テーブルへRESELECT。
- 通常時の別個の長期モードについて、設定変更時の公開移行率は `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- settingChange: `UNVERIFIED_AFTER_RESEARCH`。
- powerCycle: `UNVERIFIED_AFTER_RESEARCH`。
- 当時資料自体が内部状態を「調査中」としており、検索語を `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 高確 / 内部状態 / モード` へ拡張しても直接契約を固定できなかった。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更後は通常最大999Gのゲーム数天井が最大777Gへ短縮。
- 333G選択が設定1でも18.8%、設定6で25.0%。111G選択も低率ながら存在する。
- 朝一天井狙いの期待値へ直接影響するため、主要リセット恩恵として扱う。

### resetPenalties
- 設定変更固有の別抽選による明確な不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 前日から育った天井進捗は設定変更で消えるため、前日ハマリ狙いには期待値消失要因となるが、独立ペナルティ抽選とは扱わない。

### resetDetection
- 本機固有のガックン確定契約、朝一ステージによる確定変更判別は、機種名表記揺れ・型式 `恵比寿マスカッツY`・EXCITE/ニューギンと `ガックン / 朝一 / 設定変更判別 / 据え置き` を組み替えて再探索したが直接固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 前日ゲーム数を把握できる場合、999G進行の消去や短縮天井挙動は事後的な変更推測材料になり得るが、朝一時点の確定判別とはしない。

### numericResetData
- resetCeilingCandidates: 111G / 333G / 777G
- resetMaximumCeiling: 777G
- resetCeilingDistributionBySetting:

| 天井G | 設定1 | 設定2 | 設定3 | 設定4 | 設定5 | 設定6 |
|---:|---:|---:|---:|---:|---:|---:|
| 111G | 0.4% | 0.4% | 0.8% | 1.2% | 1.6% | 2.0% |
| 333G | 18.8% | 19.5% | 20.3% | 21.9% | 23.4% | 25.0% |
| 777G | 80.9% | 80.1% | 78.9% | 77.0% | 75.0% | 73.0% |
- 表示値は資料掲載の丸め値のため列合計が100.0%から0.1%ずれる設定がある。再正規化・平均化はしない。
reliability: ANALYSIS_HIGH

## dataQualityNotes
- 導入日は複数攻略DBが2017-04-03で一致し、業界記事の納品2017-04-02とも整合する。パチビー発表会記事には「4月中旬から導入予定」とする早期予定表記もあるため、実導入実績をcanonicalとする。
- メーカー表記は製造ブランドEXCITEをcanonicalとし、ニューギングループ/ニューギン表記をaliasとして保持。
- 通常天井の恩恵表現には「疑似BONUS」または「ART」等の資料表現差があるため、本DBでは朝一比較に必要なゲーム数契約を中心に保存し、細かな当選先内部抽選はSCOPE_EXCLUDED。

## conflicts
- `RELEASE_PLAN_NOTE`: 発表会時点「4月中旬予定」 vs 実導入DB 2017-04-03。予定と実績の時点差として分離し、数値平均等は行わない。
- material performance conflict: NONE_CONFIRMED。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- settingChange/powerCycle時の内部状態契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更/純電断時の1000ptポイント残量契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有の確定的ガックン/朝一表示判別: NONE_CONFIRMED_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-09
- https://www.pachibee.jp/machines/about/217030003 — 導入日、EXCITE、ART純増、疑似BONUS構造
- https://news.p-world.co.jp/articles/9048/greenbelt — 2017-02-15業界発表、納品4/2予定、純増約2.0枚/G
- https://yugi-nippon.com/pachinko-news/post-11605/ — EXCITE発表、ART特化型、純増約2.0枚/G
- https://p.hisshobon.jp/machine/2930/1/62345 — 設定別疑似BONUS/ART初当たり/機械割、導入日
- https://p.hisshobon.jp/machine/2930/1/63156 — 999G天井、設定1ベース46.7G/50枚
- https://p-kn.com/slot/2737/ — 導入日、疑似BONUS+ART、1000pt構造、ART純増
- https://www.atari7.com/slot/date1486973930.php — 導入日、設定別性能照合、ART構造
- https://chonborista.com/slot/newgin-slot/34518/ — 通常天井、設定変更/電源OFF→ON比較、設定変更後短縮天井と設定別振り分け
- https://5goki.com/newgin-excite — 設定別性能クロスチェック
- https://p-media.info/%E6%81%B5%E6%AF%94%E5%AF%BF%E3%83%9E%E3%82%B9%E3%82%AB%E3%83%83%E3%83%84%E3%81%8C%E3%82%A8%E3%82%AD%E3%82%B5%E3%82%A4%E3%83%88%E3%81%8B%E3%82%89%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E5%8C%96%EF%BC%8Fav/ — 検定通過型式 `恵比寿マスカッツY`、メーカーEXCITE
